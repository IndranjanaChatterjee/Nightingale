import React from 'react'

export default function Card({name,path, setMySound}) {
    const handleClick=()=>{
        setMySound(path);
    }
  return (
    <div className='w-[20rem] bg-[red] '>
        <h1 className='w-full text-center font-bold text-[3rem]'>{name}</h1>
        <button className='text-white w-full px-[2rem] py-[0.5rem]' onClick={handleClick}>Play</button>
    </div>
  )
}