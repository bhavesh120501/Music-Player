import { createContext, useState } from "react";

export const SongsContext = createContext();

export const SongsProvider = ({children}) => {
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    // const [accentColor, setAccentColor] = useState('#FFFFFF'); 
    const [selectedSongId, setSelectedSongId] = useState(1); 
    const [activeTab, setActiveTab] = useState('For You'); 
    
    return (
      <SongsContext.Provider
        value={{
          songs,
          setSongs,
          filteredSongs,
          setFilteredSongs,
          selectedSongId,
          setSelectedSongId,
          activeTab,
          setActiveTab,
        }}
      >
        {children}
      </SongsContext.Provider>
    );
}