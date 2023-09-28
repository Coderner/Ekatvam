import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Home = () =>{
    return(
        <div className="bg-gradient-to-br from-fuchsia-800 to-fuchsia-200 md:flex h-full
          justify-between  lg:px-44 md:px-10 md:py-10 py-16">
            <Login/>
            <Signup/>
        </div>
    )
};

export default Home;