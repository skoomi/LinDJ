import { useState } from "react";
import FilterInput from "./FilterInput";

const playlistsMock = ["aaaaa", "bbbbb","bccc", "ab", "aaaab"]

function Playlists() {
    const [playlists, setPlaylists] = useState<String[]>(playlistsMock); 
  

    return (
        <div>
            <FilterInput playlists={playlistsMock} onFilter={(filtered) => setPlaylists(filtered)}/>

            <ul>
                {playlists.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                  }
            </ul>
        </div>
    );

}

export default Playlists