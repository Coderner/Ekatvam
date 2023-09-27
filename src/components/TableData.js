import React from 'react'
import { Link } from 'react-router-dom';

const TableData = ({info}) => {
    console.log(info);
  return (
    <div className="flex">
        <div className='text-center w-1/6 bg-purple-100 
        mx-1 my-2 h-16 text-purple-600 font-medium'>
           <Link to={"/dashboard/"+info?.id}>{info?.name}</Link>   
        </div>
        <div className='text-center w-1/6 bg-purple-100 
        mx-1 my-2 h-16 text-purple-600 font-medium'>
              {info?.username}
        </div>
        <div className='text-center w-1/6 bg-purple-100 
        mx-1 my-2 h-16 text-purple-600 font-medium'>
              {info?.email}
        </div>
        <div className='text-center w-1/6 bg-purple-100 
        mx-1 my-2 h-16 text-purple-600 font-medium'>
              {info?.address?.street}
        </div>
        <div className='text-center w-1/6 bg-purple-100 
        mx-1 my-2 h-16 text-purple-600 font-medium'>
              {info?.phone}
        </div>
        <div className='text-center w-1/6 bg-purple-100 
        mx-1 my-2 h-16 text-purple-600 font-medium'>
              {info?.website}
        </div>
    </div>
  )
}

export default TableData