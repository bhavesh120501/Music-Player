import React, { useContext, useState, useEffect, useRef } from 'react';
import { SongsContext } from './Context/GlobalContext';
import { FaPlay, FaPause, FaEllipsisH,FaVolumeUp } from 'react-icons/fa';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import './MusicPlayer.css';

export const MusicPlayer = () => {
    const { songs, selectedSongId, setSelectedSongId,accentColor,setAccentColor } = useContext(SongsContext);
    const selectedSong = songs.find((song) => song.id === selectedSongId);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const seekerRef = useRef(null);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNextSong = () => {
        const currentIndex = songs.findIndex((song) => song.id === selectedSongId);
        const nextIndex = (currentIndex + 1) % songs.length;
        setSelectedSongId(songs[nextIndex].id);
        setIsPlaying(true);
        setAccentColor(songs[nextIndex].accent)
    };

    const handlePrevSong = () => {
        const currentIndex = songs.findIndex((song) => song.id === selectedSongId);
        if (currentTime > 3) {
            setCurrentTime(0);
            seekerRef.current.value = 0;
        } else {
            const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
            setSelectedSongId(songs[prevIndex].id);
            setIsPlaying(true);
            setAccentColor(songs[prevIndex].accent)
        }
    };

    const handleSeekerChange = (e) => {
        const newTime = e.target.value;
        setCurrentTime(newTime);
    };

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentTime((prevTime) => prevTime + 1);
            }, 1000);
            return () => clearInterval(interval);
        } 
    }, [isPlaying]);

    useEffect(() => {
        if (selectedSong) {
            setCurrentTime(0);
            setIsPlaying(false);
            // Change the background color based on the selected song
            document.body.style.backgroundColor = selectedSong.accentColor;
        }
    }, [selectedSong]);

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

                    {/* Seeker Slider */}
                    <input
                        type="range"
                        ref={seekerRef}
                        min="0"
                        max="100"
                        value={currentTime}
                        onChange={handleSeekerChange}
                        className="w-96 mt-4 custom-slider"
                    />

                    {/* Controls */}
                    <div className="flex items-center justify-between gap-4 mt-5 w-96">
                        <div className="bg-neutral-600 p-2 rounded-full cursor-pointer hover:bg-neutral-500">
                            <FaEllipsisH className="text-white" />
                        </div>
                        <div onClick={handlePrevSong} className="p-3 cursor-pointer">
                            <TbPlayerTrackPrevFilled className="text-gray-400 text-xl" />
                        </div>
                        <div onClick={handlePlayPause} className="bg-white items-center p-2 rounded-full cursor-pointer">
                            {isPlaying ? (
                                <FaPause className="" />
                            ) : (
                                <FaPlay className="" />
                            )}
                        </div>
                        <div onClick={handleNextSong} className="p-3 cursor-pointer">
                            <TbPlayerTrackNextFilled className="text-gray-400 text-xl" />
                        </div>
                        <div className="flex items-center">
                            <div className="bg-neutral-600 p-2 rounded-full cursor-pointer hover:bg-neutral-500">
                                <FaVolumeUp className="text-white" />
                            </div>
                        </div>
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
