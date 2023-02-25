import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
// import CollapsibleExample from "./components/header";
// import HeaderAndFooterExample from "./components/footer";
// import GroupExample from   "./components/card_component";
// import Calculator from "./component/Calculator";
// import Counter from "./component/Counter";
// import Nav2 from "./component/nav2";


///////////////// body ///////////////
import Navbar from "./components/body/Navbar";
import RightSidebar from "./components/body/LeftSidebar";
import LeftSidebar from "./components/body/RightSidebar";
import Footer from "./components/body/Footer";


///////////////// main ////////////////
import Profile from "./components/main/Profile";
import Group from "./components/main/Group";
import Chat from "./components/main/Chat";
import EditProfile from "./components/main/EditProfile";
import Email from "./components/main/Email";
import GroupDetails from "./components/main/GroupDetails";
import ProfileForum from "./components/main/ProfileForum";
import Index from "./components/main/Index";

import 'bootstrap/dist/css/bootstrap.min.css';

////////////////////// CSS Folder //////////////////////////////
import './assets/css/libs.min.css'; 
import './assets/css/socialv.css?v=4.0.0';
import './assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/vendor/remixicon/fonts/remixicon.css';
import './assets/vendor/vanillajs-datepicker/dist/css/datepicker.min.css';
import './assets/vendor/line-awesome/dist/font-awesome-line-awesome/css/all.min.css';
import './assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css';

/////////////////////  JS Folder  /////////////////////////////////

import './assets/js/libs.min.js';
import './assets/js/slider.js';
import './assets/js/masonry.pkgd.min.js';
import './assets/js/enchanter.js';
// import './assets/js/sweetalert.js'; 
import './assets/js/charts/weather-chart.js';
import './assets/js/app.js';
import './assets/vendor/vanillajs-datepicker/dist/js/datepicker.min.js';
import './assets/js/lottie.js';
// function App() {
//   const Message= [
//     {
//         bookTitle:'Becoming Free Indeed',
//         author:'Mary Pope Osborne ',
//         description:`Jinger Vuolo, the sixth child in the famous Duggar family of TLC's 19 Kids and Counting and Counting On, recounts how she began to question the unhealthy ideology of her youth and learned to embrace true freedom in Christ`,
//         bookImage:'https://m.media-amazon.com/images/I/61zHWm8mvQL._SX338_BO1,204,203,200_.jpg'
//     },
//     {
//         bookTitle:'Afternoon on the Amazon',
//         author:'Jinger Vuolo',
//         description:`Vampire bats and killer ants? That's what Jack and Annie are about to run into when the Magic Tree House whisks them away to the Amazon River. It's not long before they get hopelessly lost. Will they be able to find their way back `,
//         bookImage:'https://m.media-amazon.com/images/P/1949078205.01._SCLZZZZZZZ_SX500_.jpg'
//     },
//     {
//         bookTitle:'Hannah Saves the World',
//         author:'Luzzader ',
//         description:`Hannah’s got a funny feeling that it’s up to her to save the entire world, but before she can do so, she and her skeptical best friend Mia have to figure out what they’re saving the world from! As the girls’ detective work proceeds.`,
//         bookImage:'https://m.media-amazon.com/images/I/51neNJ95N-L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
//     },
//   ];

//   return (
//     <>
//        {/* <CollapsibleExample /> */}
//        {/* <GroupExample jack={Message}/> */}
//        {/* <HeaderAndFooterExample /> */}
//        {/* <Counter /> */}
//        {/* <Calculator /> */}
//        <Router>
//          <Nav/>
//          <Routes>
//            <Route exact path="/Calculator" element={<Calculator/>} />
//            <Route exact path="/Counter" element={<Counter/>} />
//          </Routes> 
//        </Router>
 
//     </>
//    )
//  }
 
//  export default App;

const App = () => {
  return (
    <Router>

        <Navbar />

        <RightSidebar />
        <LeftSidebar />
        
        <Routes>
          <Route exact path="/" element={<Index />} />

          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/EditProfile" element={<EditProfile />}  />
          <Route exact path="/ProfileForum" element={<ProfileForum />}  />

          <Route exact path="/Group" element={<Group />}  />
          <Route exact path="/GroupDetails" element={<GroupDetails />}  />

          <Route exact path="/Chat" element={<Chat />}  />
          <Route exact path="/Email" element={<Email />}  />
        </Routes>
        
        <Footer />

    </Router>
  )
}

export default App

