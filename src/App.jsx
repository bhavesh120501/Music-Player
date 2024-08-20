import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './Components/User';
import { SongsList } from './Components/SongsList';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex" style={{height:"33rem"}}>
          <div className="flex flex-col w-2/12 justify-between h-full">
          <User/>
          </div>
          <div className="flex flex-col w-4/12 bg-gray-300 h-full">
          <SongsList/>
          </div>
          <div className="w-6/12 bg-gray-400">4</div>
        </div>
      </div>
    </>
  );
}

export default App
