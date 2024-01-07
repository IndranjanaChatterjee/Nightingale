import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card';
import musicc from "./assets/music/Kalank Flute.mp3";
import musicc1 from "./assets/music/harry.mp3";
import useSound from 'use-sound';

const App = () => {
  
  const [path,setPath]=useState("");
  const [playSound] = useSound(path);
  useEffect(() => {
    {playSound}
  }, [path]);

  return (
    <Card path={path} setPath={setPath} addmusic={musicc}/>
  );
};

export default App;
