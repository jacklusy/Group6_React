import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
// import './assets/css/login.css';
import { Link } from 'react-router-dom';
// import loginImg from './react1.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;


const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, passwordUpdate] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);


    useEffect(() => {
        getUser()
    }, []);

    //   useEffect(()=>{
    //     ProceedLogin()
    // },[]);

    const ProceedLogin = () => {
        for (const user of users) {

            if (email.length === 0 || password.length === 0) {
                setError(true)
            } else {
                if (user.email === email && user.password === password && Object.entries(email).length > 0 && Object.entries(password).length > 0) {

                    localStorage.setItem('Id', JSON.stringify(user.id))
                    localStorage.setItem('Email', JSON.stringify(user.email))
                    localStorage.setItem('Password', JSON.stringify(user.password))
                    console.log(`Welcome User`)
                    toast.success('Welcome User ❤️')
                    navigate('/home')
                    return;
                }
            }
        }
        console.log("Wrong email or password");

        toast.error('Wrong email or password');





    }

    const getUser = () => {
        axios.get('http://localhost/ReactBreef/Reactphp/log_reg.php').then(function (response) {
            setUsers(response.data)
        })
    }

    return (
        <>


            <div id="content-page" className="content-page">
                <div className="container1">
                    <div className='jack'>
                        <div className="lItem">
                            {/* <div className="loginImage">
                            <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/>
                            </div> */}
                        </div>
                        <div>

                          
                                <h2> Website Name </h2>

                                <FormItem>
                                    <Input
                                        placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} name="email" type="email" />
                                    {error && email.length === 0 &&
                                        <label>Email is required</label>}
                                    {email.length > 0 && !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/.test(email)) && (
                                        <label>This is not a valid email</label>
                                    )}
                                </FormItem>

                                <FormItem>
                                    <Input
                                        placeholder="Password" value={password} onChange={e => passwordUpdate(e.target.value)} name="password" type="password" />
                                    {error && password.length === 0 ?
                                        <label>Password is required</label> : ""}
                                    {/* {error?
                            <label>Wrong email or password</label>:""} */}
                                </FormItem>

                                <FormItem>

                                    <Button onClick={ProceedLogin} type="submit" className="login-form-button" > Login </Button>

                                </FormItem>

                                <p className="login-form-p">
                                    Don't have an account ? <Link to={'/register'}> Sign up</Link>
                                </p>

                       
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}

export default Login