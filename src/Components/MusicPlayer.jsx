import React, { useContext } from 'react';
import { SongsContext } from './Context/GlobalContext';

export const MusicPlayer = () => {
    const { songs, selectedSongId } = useContext(SongsContext);

    // Find the selected song based on the selectedSongId
    const selectedSong = songs.find((song) => song.id === selectedSongId);

    return (
        <div className='flex flex-col h-full p-14 ml-16'>
            {selectedSong ? (
                <>
                    <div className="text-2xl font-semibold text-white text-left">
                        {selectedSong.name}
                    </div>
                    <div className="text-xs text-left text-gray-300">
                        {selectedSong.artist}
                    </div>
                    <div className="text-left mt-4">
                        <img 
                            src={`https://cms.samespace.com/assets/${selectedSong.cover}`}
                            alt={selectedSong.name} 
                            className="rounded-lg w-96 h-80 object-cover"
                        />
                    </div>
                </>
            ) : (
                <div className="text-white text-left">
                    No song selected
                </div>
            )}
        </div>
    );
};
