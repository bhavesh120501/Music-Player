import React from 'react'
import { CiSearch } from "react-icons/ci";

export const SongsList = () => {
  return (
    <div className="flex flex-col h-full p-5 gap-4">
      <div className="flex gap-10 text-xl font-semibold items-center">
        <button className="tracking-wide">For You</button>
        <button className="tracking-wide">Top Tracks</button>
      </div>
      <div className="relative w-full flex">
        <input
          type="text"
          placeholder="Search Song, Artist"
          className="w-full p-1 pr-10 border border-gray-400 rounded-lg"
        />
        <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
            <div><span>logo</span></div>
            <div className='flex flex-col'>
                <span>starboy</span>
                <span>weeknd</span>
            </div>
        </div>
        <div className='flex items-center'>
            <span>time</span>
        </div>
      </div>
    </div>
  );
}
