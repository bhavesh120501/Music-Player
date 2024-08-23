import React from 'react'

export const SongItem = ({song, selectedSongId, handleSongClick, formatDuration}) => {
  return (
    <div
      key={song.id}
      className={`flex justify-between items-center p-2 md:p-[5.7px] lg:p-2 ${
        selectedSongId === song.id ? "bg-neutral-600 rounded-md" : ""
      }`}
      onClick={() => handleSongClick(song)}
    >
      <div className="flex items-center gap-4">
        <img
          src={`https://cms.samespace.com/assets/${song.cover}`}
          alt={song.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col text-left">
          <span className="font-normal text-white">{song.name}</span>
          <span className="text-xs text-gray-300">{song.artist}</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm text-gray-500 text-white">
          {formatDuration(song.id)}
        </span>
      </div>
    </div>
  );
}
