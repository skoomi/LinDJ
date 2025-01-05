import { useState } from "react";

interface FilterInputProps {
    playlists: string[];
    onFilter: (filtered: string[]) => void; 
  }
function FilterInput({ playlists, onFilter }: FilterInputProps) {
    const [filteredPlaylists, setFilteredPlaylists] = useState<String[]>(playlists); 
    const searchOnChange = (e: React.FormEvent<HTMLInputElement>)=>{
        const newValue = e.currentTarget.value;

        if(newValue && newValue !== "") {
            onFilter(playlists.filter((playlist)=>playlist.includes(newValue)));
        } else {
            onFilter(playlists)
        }
    };

    return (
        <input onChange={searchOnChange} type="text" placeholder="Playlist name"></input>
    );

}

export default FilterInput