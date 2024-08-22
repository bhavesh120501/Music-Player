import React, { useState } from 'react';
import './App.css';
import { User } from './Components/User';
import { SongsList } from './Components/SongsList';
import { MusicPlayer } from './Components/MusicPlayer';
import { MdKeyboardArrowDown } from 'react-icons/md';  // Import the down arrow icon

function App() {
  const [showMusicPlayer, setShowMusicPlayer] = useState(true);

  return (
    <div className="container mx-auto relative h-screen">
      {/* Toggle Button */}
      <button 
        className="absolute top-2 right-4 bg-white text-black p-1 rounded-full z-10 md:hidden" 
        onClick={() => setShowMusicPlayer(!showMusicPlayer)}
      >
        <MdKeyboardArrowDown /> {/* Use down arrow icon */}
      </button>

      <div className="flex h-full">
        {/* User Component */}
        <div className={`hidden md:flex md:w-1/12 lg:w-2/12 justify-between h-full`}>
          <User />
        </div>

        {/* SongsList Component */}
        <div className={`flex flex-col ${showMusicPlayer ? 'hidden md:flex' : 'flex'} mx-4 md:ml-24 md:mx-0 w-full md:w-4/12 lg:w-4/12 h-full`}>
          <SongsList />
        </div>

        {/* MusicPlayer Component */}
        <div className={`flex flex-col ${showMusicPlayer ? 'w-full md:w-7/12 lg:w-6/12 mx-4 md:mx-0' : 'hidden'} h-full`}>
          <MusicPlayer show={showMusicPlayer} />
        </div>
      </div>
    </div>
  );
}

export default App;
