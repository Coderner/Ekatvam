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
        <div className="bg-fuchsia-100 pb-20">
            <div className="flex justify-between px-16">
                <h1 className="flex text-3xl py-9 px-14 font-semibold text-purple-700"><FaClipboardList className="mt-1"/> Dashboard</h1>
                <div className=" py-9 px-14"><Link to="/create"><button className="flex text-xl bg-green-500 font-semibold py-2 px-4 text-white rounded-2xl"> Create New User Profile <FaPlusCircle className="mt-1 ml-1"/></button></Link></div>
            </div>
            <div className="w-5/6 bg-fuchsia-200 mx-auto shadow-lg shadow-fuchsia-200 rounded-2xl p-6">
            <div>
                <div className="flex m-2">
                    <div className="w-1/6 text-center font-medium">Name</div>
                    <div className="w-1/6 text-center font-medium">UserName</div>
                    <div className="w-1/6 text-center font-medium">Email</div>
                    <div className="w-1/6 text-center font-medium">Address</div>
                    <div className="w-1/6 text-center font-medium">Phone</div>
                    <div className="w-1/6 text-center font-medium">Website</div>
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