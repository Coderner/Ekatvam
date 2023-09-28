import React, { useEffect, useState } from "react";
import {FaClipboardList, FaUserFriends, FaPlusCircle} from 'react-icons/fa';
import TableData from "./TableData";
import { Link } from "react-router-dom";

const Dashboard = () =>{
    
    const api_url="https://jsonplaceholder.typicode.com/users";
    const [table,setTable] = useState([]);

    useEffect(()=>{
        getInfo(api_url);
    },[]);

    const getInfo = async (url) => {
        const data = await fetch(url);
        const json = await data.json();
        setTable(json);
    }

    return(
        <div className="w-full h-screen bg-fuchsia-100">
            <div className="flex justify-between lg:px-10 px-8">
                <h1 className="flex lg:text-3xl md:text-2xl text-lg lg:py-9 py-4 font-semibold text-purple-700"><FaClipboardList className="mt-1"/> Dashboard</h1>
                <div className="lg:py-9 py-4"><Link to="/create"><button className="flex md:text-xl md:text-lg sm:text-base text-sm bg-green-500 font-semibold py-1 px-2 text-white rounded-3xl"> Create User <FaPlusCircle className="mt-1 ml-1"/></button></Link></div>
            </div>
            <div className="w-11/12 bg-fuchsia-200 mx-auto shadow-lg shadow-fuchsia-200 rounded-2xl lg:p-6 md:p-4 sm:p-2 p-1">
            <div>
                <div className="flex m-2">
                    <div className="w-1/5 text-center font-medium lg:text-base sm:text-sm text-xs">Name</div>
                    <div className="w-1/5 text-center font-medium lg:text-base sm:text-sm text-xs">UserName</div>
                    <div className="w-1/5 text-center font-medium lg:text-base sm:text-sm text-xs">Email</div>
                    <div className="w-1/5 text-center font-medium lg:text-base sm:text-sm text-xs">Address</div>
                    <div className="w-1/5 text-center font-medium lg:text-base sm:text-sm text-xs">Phone</div>
                </div>
                <div>
                    {table.map( tableData =>  <TableData key={tableData.id} info={tableData}/>)}
                </div>
            </div>
            </div>
        </div>
    )
};

export default Dashboard;