import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import SignupImg from "./SignupImg";
import LoginImg from "./LoginImg";

const Home = () =>{
    return(
        <div>
           <Login/>
           <SignupImg/>
           <Signup/>
           <LoginImg/>
        </div>
    )
};

export default Home;