import React, { useState } from 'react'

function University(e) {
    const [hover,setHover]=useState(true)
  return (
    <div className='rounded-md h-36 bg-purple-600 shadow-lg shadow-gray-400 hover:bg-purple-800 hover:cursor-pointer text-center align-middle p-2 flex'
        onMouseEnter={()=> setHover(false)}
        onMouseLeave={()=>setHover(true)}
    >
        <h1 className='m-auto text-xl text-gray-200'>
            
            {hover ? e?.name : <a href={e.link} target='__blank' className='text-lg underline text-blue-500'>{e.link}</a>}
        </h1>
    </div>
  )
}

export default University