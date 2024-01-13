import { useState,useEffect, useRef } from 'react'
import './App.css'
import Card from './Components/Card';
import musicc from "./assets/music/jeevan.mp3";
import musicc1 from "./assets/music/kahi.mp3";
import musicc2 from "./assets/music/sama.mp3";
import musicc3 from "./assets/music/tere.mp3";
import musicc4 from "./assets/music/tu.mp3";
import musicc5 from "./assets/music/yeh.mp3";


const App = () => {
  const songs=
[
  {
    
    img_src:
      "https://i.ytimg.com/vi/idUREJ2tn54/sddefault.jpg",
    title:musicc
  },
  {
    img_src:
      "https://i.ytimg.com/vi/QZL6HlCXUNI/maxresdefault.jpg",
    title:musicc1
  },
  {
    img_src: "https://i.ytimg.com/vi/vDFyP6gliFQ/maxresdefault.jpg",
    title:musicc2
  },
  {
    img_src: "https://i.ytimg.com/vi/8-HnmVg0-O8/hqdefault.jpg",
    title:musicc3
  },
  {
    img_src: "https://i.ytimg.com/vi/5kwgFJZ1xvY/maxresdefault.jpg",
    title:musicc4
  },
  {
    img_src: "https://i.ytimg.com/vi/z-vcE-UTc-0/mqdefault.jpg",
    title:musicc5
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
    <div className='min-h-screen flex gap-[2rem] items-center justify-center flex-wrap'>
      {songs.map((song)=>
      { return(
        <Card path={song.title} name="Kalank"  setMySound={setMySound}  key={song.title} img={song.img_src}/>);
      })}
    
    
    
    <audio ref={audioRef} src={mySound}  />
    </div>
  );
};
export default App;