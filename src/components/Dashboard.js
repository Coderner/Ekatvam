import React from "react";
import {FaClipboardList, FaUserFriends, FaPlusCircle} from 'react-icons/fa';

const Dashboard = () =>{
    return(
        <div className="bg-fuchsia-100 h-screen">
            <div className="flex justify-between px-16">
                <h1 className="flex text-3xl py-9 px-14 font-semibold text-purple-700"><FaClipboardList className="mt-1"/> Dashboard</h1>
                <div className=" py-9 px-14"><button className="flex text-xl bg-green-500 font-semibold py-2 px-4 text-white rounded-2xl"> Create New User Profile <FaPlusCircle className="mt-1 ml-1"/></button></div>
            </div>
            <div className="w-5/6 bg-fuchsia-200 mx-auto shadow-lg shadow-fuchsia-200 rounded-2xl p-6">
            <table>
                <tr>
                    <th className="px-16">Name</th>
                    <th className="px-16">UserName</th>
                    <th className="px-16">Email</th>
                    <th className="px-16">Address</th>
                    <th className="px-16">Phone</th>
                    <th className="px-16">Website</th>
                </tr>
                {/* {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })} */}
            </table>
            </div>
        </div>
    )
};

export default Dashboard;