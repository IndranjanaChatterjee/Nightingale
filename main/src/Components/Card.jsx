import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Card({name,path, setMySound,img}) {
    const handleClick=()=>{
        setMySound(path);
    }
  return (
    <div className='w-[20rem] bg-[red] card  h-[25rem] relative rounded-[1.3rem]' style={{backgroundImage:`url(${img})`}}>
        
        <button className='text-white w-full px-[2rem] py-[0.5rem] absolute bottom-[2rem] text-[3rem] shadow-slate-50' onClick={handleClick}><FontAwesomeIcon icon={faPlay} /></button>
    </div>
  )
}