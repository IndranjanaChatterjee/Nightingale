import React, { useState } from 'react';


export default function Card(props) {
    const [music,setMusic]=useState(props.addmusic);
    const playy=()=>
    {
        setMusic(props.addmusic);
        let audio_play=new Audio(music);
        audio_play.play();
    }
  return (
    <button onClick={playy}>
        play
    </button>
  )
}
