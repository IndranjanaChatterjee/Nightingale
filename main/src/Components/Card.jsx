import React from 'react'

export default function Card({name,path, setMySound,img}) {
    const handleClick=()=>{
        setMySound(path);
    }
  return (
    <div className='w-[20rem] bg-[red] card  h-[25rem] relative' style={{backgroundImage:`url(${img})`}}>
        
        <button className='text-white w-full px-[2rem] py-[0.5rem] absolute bottom-[2rem]' onClick={handleClick}>Play</button>
    </div>
  )
}