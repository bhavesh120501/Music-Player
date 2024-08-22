import { useState } from 'react'
import './App.css'
import { User } from './Components/User';
import { SongsList } from './Components/SongsList';
import { MusicPlayer } from './Components/MusicPlayer';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex h-screen">
          <div className="flex flex-col md:w-1/12 lg:w-2/12 justify-between h-full">
          <User/>
          </div>
          <div className="flex flex-col ml-20 md:w-4/12 lg:w-4/12 h-full">
          <SongsList/>
          </div>
          <div className="flex flex-col md:w-7/12 lg:w-6/12 h-full">
          <MusicPlayer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
