import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form,  Input, Button} from "antd";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../body/Navbar';
import RightSidebar from '../../body/RightSidebar';
import LeftSidebar from '../../body/LeftSidebar';
import Footer from '../../body/Footer';
import './Register.css';

// import loginImg from './react1.png'

const FormItem = Form.Item;

const Register = () => {
    
    const navigate = useNavigate();
    

    const [first_name, firstnamechange] = useState("");
    const [last_name, lastnamechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [phone, phonechange] = useState("");
    const [error , setError] = useState(false);



    const handleSubmit =(e)=>{

        e.preventDefault(); 
         
        const inputs ={ first_name , last_name , email , password , phone}

       
        if (first_name.length===0 || last_name.length===0 || phone.length===0 || email.length===0 || password.length===0 || !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(email)) )  {

          setError(true)
        }
        
        else{
     
        //console.log(inputs);
       axios.post('http://localhost/ReactBreef/Reactphp/log_reg.php', inputs ).then(function(response){
        console.log(response.data); 
        //console.log(response); 
       })

      toast.success('Account Created Successfully 👌');
       navigate('/');
      }}
   


  return (
        <>
           

            <div className="container" >
      <div>
        {/* <div className="loginImage">
                  <img src={loginImg} width="300" style={{position: 'relative'}} alt="login" />
                </div> */}
      </div>
      <div>
        <div className="lItem">
          
              
           <Form className="login-form" >
                  <h2> Website Name </h2>
                  <p className="login-form-p">Sign Up To See Photos & Posts From Your Friends.</p>
            <FormItem>
                <Input  placeholder="First Name" name="first_name" value={first_name} onChange={e => firstnamechange(e.target.value)} type="text"  />
                {error&&first_name.length===0?
                <label>Firstname is required</label>:""} 
                   
                   
            </FormItem>

            <FormItem>
                <Input placeholder="Last Name"  name="last_name" value={last_name} onChange={e => lastnamechange(e.target.value)} type="text"   />

                {error&&last_name.length===0?
                <label>Lastname is required</label>:""}
            </FormItem>

            <FormItem>
               <Input placeholder="Phone" name="phone"  value={phone} onChange={e => phonechange(e.target.value)}  type="text"   />
               {error && phone.length === 0 &&
                 <label>Phone is required</label>}
                 {phone.length > 0 && !(/^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)) && (
                 <label>Phone Number must be at least 10 numbers</label> 
                   )}
            </FormItem>

            <FormItem>
                <Input
                  placeholder="Email"  name="email" value={email} onChange={e => emailchange(e.target.value)} type="email"  />
                 {error && email.length === 0 &&
                 <label>Email is required</label>}
                 {email.length > 0 && !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/.test(email)) && (
                 <label>This is not a valid email</label> 
                   )}
            </FormItem>

            <FormItem>
                <Input placeholder="Password" name="password" value={password} onChange={e => passwordchange(e.target.value)}  type="password"   />
                {error && password.length === 0 &&
                 <label>Password is required</label>}
                 {password.length > 0 && !(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)) && (
                  <label>This is not a valid password</label> 
                  
               )}
            </FormItem>  

            <FormItem>
              <Button onClick={handleSubmit}    type="submit" className="login-form-button">
                Sign up
              </Button>  
            </FormItem>
          </Form> 
            
             <p className="login-form-p">
              Have an account? <Link to={'/'}> Log in</Link>
              </p>
              </div>     
          </div>

            </div>
    

        </>
          )
  }           
             
          
      


export default Register