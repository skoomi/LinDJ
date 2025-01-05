import { useState } from "react";

const playlistsMock = ["aaaaa", "bbbbb","bccc", "ab", "aaaab"]

function Playlists() {
    const [playlists, setPlaylists] = useState<String[]>(playlistsMock); 
    const searchOnChange = (e: React.FormEvent<HTMLInputElement>)=>{
        const newValue = e.currentTarget.value;

        if(newValue && newValue !== "") {
            setPlaylists(()=>playlistsMock.filter((playlist)=>playlist.includes(newValue)));
        } else {
            setPlaylists(()=>playlistsMock)
        }
    };

    return (
        <div>
            <input onChange={searchOnChange} type="text" placeholder="Playlist name"></input>

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