import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './Components/User';
import { SongsList } from './Components/SongsList';
import { MusicPlayer } from './Components/MusicPlayer';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex h-screen">
          <div className="flex flex-col w-2/12 justify-between h-full">
          <User/>
          </div>
          <div className="flex flex-col w-4/12 h-full">
          <SongsList/>
          </div>
          <div className="w-6/12">
          <MusicPlayer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
