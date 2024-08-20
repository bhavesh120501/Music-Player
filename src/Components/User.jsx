import React from 'react';
import { AiOutlineSpotify, AiOutlineTrademark } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

export const User = ({ accentColor }) => {
  return (
    <div className="flex flex-col h-full justify-between p-4" style={{ color: accentColor }}>
      <div className="flex items-center space-x-1 items-start text-white">
        <AiOutlineSpotify className="text-4xl" />
        <span className="text-xl font-semibold flex items-center">
          Spotify
          <AiOutlineTrademark style={{ fontSize: '0.5rem' }} />
        </span>
      </div>
      <div className="flex items-center items-start text-white">
        <FaRegUserCircle className="text-3xl" />
      </div>
    </div>
  );
};
