import React, { useState } from 'react';


export default function Card(props) {
    const [music,setMusic]=useState(0);
    let audio_play;
    const playy=()=>
    {
        
        props.setPath(props.addmusic);
        
        
        
        
    }
  return (
    <button onClick={playy}>
        play
    </button>
  )
}
