import React from 'react';
import { AiOutlineSpotify, AiOutlineTrademark } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

export const User = () => {
  return (
    <div className="flex flex-col h-full justify-between p-4">
      <div className="flex items-center space-x-1 items-start text-white">
        <AiOutlineSpotify className="text-4xl" />
        <span className="md:text-lg md:font-medium lg:text-xl lg:font-semibold flex items-center">
          Spotify
          <AiOutlineTrademark style={{ fontSize: '0.5rem' }} />
        </span>
      </div>
      <div className="flex items-center items-start text-white md:-mb-2 lg:mb-0">
        <FaRegUserCircle className="md:text-2xl lg:text-3xl" />
      </div>
    </div>
  );
};
