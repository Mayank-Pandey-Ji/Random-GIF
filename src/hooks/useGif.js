import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
const API_KEY = 'qHvdXCOFByw2fot6pCiTK0djHf7eWRpi';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

const useGif = (tag) => {
    const [gif , setGif] = useState("");
    const [loading , setLoading] = useState(true);
    async function fetchData(tag)
    {
      setLoading(true);
      const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      setLoading(false);
      setGif(imageSource);
    }
  
    
     useEffect(() => {
        fetchData('car') ;
      } , [])

      return { gif , loading , fetchData}
  
}

export default useGif
