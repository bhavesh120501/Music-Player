import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";

export const SongsList = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSongId, setSelectedSongId] = useState(1); 
  const [accentColor, setAccentColor] = useState('#FFFFFF'); 
  const [activeTab, setActiveTab] = useState('For You'); 

  useEffect(() => {
    // Fetch songs from the API
    fetch('https://cms.samespace.com/items/songs')
      .then(response => response.json())
      .then(data => {
        const fetchedSongs = data.data;
        setSongs(fetchedSongs);

        // Set the default accent color
        const defaultSong = fetchedSongs.find(song => song.id === selectedSongId);
        if (defaultSong) {
          setAccentColor(defaultSong.accent || '#FFFFFF');
        }

        // // Filter songs based on the default tab
        // filterSongs(activeTab, fetchedSongs);
      })
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  useEffect(() => {
    // Filter songs based on the search term
    filterSongs(activeTab, songs);
  }, [searchTerm, songs, activeTab]);

  useEffect(() => {
    // Update background color when the accent color changes
    document.body.style.backgroundColor = accentColor;
  }, [accentColor]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSongClick = (song) => {
    setSelectedSongId(song.id);
    setAccentColor(song.accent || '#FFFFFF');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // filterSongs(tab, songs);
  };

  const filterSongs = (tab, songsList) => {
    let filtered;
    if (tab === 'Top Tracks') {
      filtered = songsList.filter(song => song.top_track);
    } else {
      filtered = songsList;
    }
    setFilteredSongs(filtered.filter(song =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  const formatDuration = (url) => {
    return '3:45';
  };

  return (
    <div className="flex flex-col h-full p-5 gap-4">
      <div className="flex gap-10 text-xl font-semibold items-center">
        <button
          className={`tracking-wide ${activeTab === 'For You' ? 'text-white' : 'text-gray-500 bg-transparent'}`}
          onClick={() => handleTabClick('For You')}
        >
          For You
        </button>
        <button
          className={`tracking-wide ${activeTab === 'Top Tracks' ? 'text-white' : 'text-gray-500 bg-transparent'}`}
          onClick={() => handleTabClick('Top Tracks')}
        >
          Top Tracks
        </button>
      </div>
      <div className="relative w-full flex">
        <input
          type="text"
          placeholder="Search Song, Artist"
          className="w-full p-1 pr-10 border border-gray-400 rounded-lg"
          value={searchTerm}
          onChange={handleSearch}
        />
        <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <div className="flex flex-col gap-0.5">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div
              key={song.id}
              className={`flex justify-between items-center p-2 ${selectedSongId === song.id ? 'bg-neutral-400 rounded-md' : ''}`}
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
                <span className="text-sm text-gray-500 text-white">{formatDuration(song.url)}</span>
              </div>
            </div>
          ))
        ) : (
          <div className='text-white'>No songs found...</div>
        )}
      </div>
    </div>
  );
};
