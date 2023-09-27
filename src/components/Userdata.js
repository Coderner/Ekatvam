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

  console.log(userId);
  console.log(data);

  return (
       <div className="w-60 p-2 m-3 h-80 shadow-md bg-red-50">
          {data.filter( x => (x.id===userId))}
          <h1>{data.name}</h1>

      </div>
  )
}

export default Userdata