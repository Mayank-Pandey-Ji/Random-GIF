import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = 'qHvdXCOFByw2fot6pCiTK0djHf7eWRpi';
const Random = () => {

   
  // const [gif , setGif] = useState("");
  // const [loading , setLoading] = useState(true);
  // async function fetchData()
  // {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setLoading(false);
  //   setGif(imageSource);
  // }
  //  useEffect(() => {
  //     fetchData() ;
  //   } , [])

  const {gif , loading , fetchData} = useGif();

  function clickHandler()
  {
    fetchData();
  }

  return (
    <div className=' w-1/2   bg-[#4ade80] rounded-xl  border-gray-600 border-2 flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl font-bold underline'> A RANDOM GIF</h1>
      {loading ? (<Spinner/>):(<img src={gif} alt="" />)}
      <button onClick={clickHandler} className='w-10/12 bg-[#c9f5d9] my-5 text-lg py-2 rounded-lg'>Generate</button>
    </div>
  )
}

export default Random
