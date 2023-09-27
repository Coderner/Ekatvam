import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Home = () =>{
    return(
        <div className="bg-gradient-to-br from-fuchsia-800 to-fuchsia-200 flex h-screen 
          justify-between px-44 py-20">
            <Login/>
            <Signup/>
        </div>
    )
};

export default Home;