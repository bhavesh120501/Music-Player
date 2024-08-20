import React from 'react'
import { AiOutlineSpotify, AiOutlineTrademark } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

export const User = () => {
  return (
    <div className="flex flex-col h-full justify-between p-4">
      <div className="flex items-center space-x-1">
        <AiOutlineSpotify className="text-4xl" />
        <span className="text-xl font-semibold flex items-center">
          Spotify
          <AiOutlineTrademark style={{ fontSize: '0.5rem' }} />
        </span>
      </div>
      <div className="flex items-center">
        <FaRegUserCircle className="text-2xl" />
      </div>
    </div>
  )
}
