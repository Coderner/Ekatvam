import React from 'react'
import { Link } from 'react-router-dom';

const TableData = ({info}) => {
    console.log(info);
  return (
    <div className="flex">
        <div className='text-center w-1/5 bg-purple-100 
        sm:mx-1 mx-0.5 sm:my-2 my-1 lg:h-16 sm:h-12 h-8 text-purple-600 font-medium lg:text-base sm:text-sm text-xs'>
           <Link to={"/dashboard/"+info?.id}>{info?.name}<span className='font-bold text-green-700'>+</span></Link>   
        </div>
        <div className='text-center w-1/5 bg-purple-100 
        sm:mx-1 mx-0.5 sm:my-2 my-1 lg:h-16 sm:h-12 h-8 text-purple-600 font-medium lg:text-base sm:text-sm text-xs'>
              {info?.username}
        </div>
        <div className='text-center w-1/5 bg-purple-100 
        sm:mx-1 mx-0.5 sm:my-2 my-1 lg:h-16 sm:h-12 h-8 text-purple-600 font-medium lg:text-base sm:text-sm text-xs'>
              {info?.email}
        </div>
        <div className='text-center w-1/5 bg-purple-100 
        sm:mx-1 mx-0.5 sm:my-2 my-1 lg:h-16 sm:h-12 h-8 text-purple-600 font-medium lg:text-base sm:text-sm text-xs'>
              {info?.address?.street}
        </div>
        <div className='text-center w-1/5 bg-purple-100 
        sm:mx-1 mx-0.5 sm:my-2 my-1 lg:h-16 sm:h-12 h-8 text-purple-600 font-medium lg:text-base sm:text-sm text-xs'>
              {info?.phone}
        </div>
    </div>
  )
}

export default TableData