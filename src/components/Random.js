import React, { useState } from 'react'

const Random = () => {

  const {gif , setGif} = useState("");
  function clickHandler()
  {

  }

  return (
    <div className=' w-1/2  h-[450px] bg-[#4ade80] rounded-xl  border-gray-600 border-2 flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl font-bold underline'> A RANDOM GIF</h1>
      <img src={gif} alt="" />
      <button onClick={clickHandler} className='w-10/12 bg-[#c9f5d9] text-lg py-2 rounded-lg'>Generate</button>
    </div>
  )
}

export default Random
