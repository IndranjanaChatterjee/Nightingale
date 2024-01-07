import { useState,useEffect, useRef } from 'react'
import './App.css'
import Card from './Components/Card';
import musicc from "./assets/music/Kalank Flute.mp3";
import musicc1 from "./assets/music/harry.mp3";


const App = () => {
  const songs=
[
  {
    
    img_src:
      "https://miriamruthross.files.wordpress.com/2014/09/1280x720-sos.jpg",
    title:musicc
  },
  {
    img_src:
      "https://miriamruthross.files.wordpress.com/2014/09/1280x720-sos.jpg",
    title:musicc1
  },
  {
    img_src: "https://i.ytimg.com/vi/YX8NjvkjWgw/maxresdefault.jpg",
    title:musicc
  },
]
  const audio = document.getElementById("audio_tag");
  const [mySound,setMySound] = useState('');
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef, mySound]);
  return (
    <div className='min-h-screen flex gap-[2rem] items-center justify-center'>
      {songs.map((song)=>
      { return(
        <Card path={song.title} name="Kalank"  setMySound={setMySound}  key={song.title}/>);
      })}
    
    
    
    <audio ref={audioRef} src={mySound}  />
    </div>
  );
};
export default App;