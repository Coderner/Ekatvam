import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Userdata = () => {

  const {userId} = useParams();

  const api_url="https://jsonplaceholder.typicode.com/users";
  const [data,setData] = useState([]);

  useEffect(()=>{
    getInfo(api_url);
  },[]);

  const getInfo = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    setData(json);
  }

  function isUser({id}){
      return id==userId;
  }
  
  const New = data.filter(isUser);

  console.log(New);

  return (
       <div className="h-screen bg-gradient-to-br from-fuchsia-800 to-fuchsia-200 md:py-24 py-20 ">
          <div className="w-2/3 mx-auto shadow-lg  bg-purple-200 shadow-fuchsia-500 rounded-2xl lg:p-8 md:p-7 p-5">
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Name - </span>{New[0]?.name}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'> UserName - </span>{New[0]?.username}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'> Email - </span>{New[0]?.email}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Phone - </span>{New[0]?.phone}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Address - </span>{New[0]?.address?.suite}, {New[0]?.address?.street}, {New[0]?.address?.city} 
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Zip Code - </span>{New[0]?.address?.zipcode}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Website - </span>{New[0]?.website}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Company - </span>{New[0]?.company?.name}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Company Phrase - </span>{New[0]?.company?.catchPhrase}
          </h1>
          <h1 className='font-md text-l md:text-xl'> 
               <span className='font-semibold text-purple-600'>Company BS - </span>{New[0]?.company?.bs}
          </h1>
      </div>
      </div>
  )
}

export default Userdata