import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card';
import musicc from "./assets/music/Kalank Flute.mp3";
import musicc1 from "./assets/music/harry.mp3";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Card addmusic={musicc}/>
    <Card addmusic={musicc1}/>
    </>
  )
}

export default App
