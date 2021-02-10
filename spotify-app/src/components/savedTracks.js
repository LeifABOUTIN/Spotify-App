import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Player from './player';

const SavedTracks = () => {
    const endpoint = "https://api.spotify.com/v1/me/tracks";
    const token = useSelector( state => state.tokenReducer);
    const [ savedTracks, setSavedTracks ] = useState();
    const [ player, setPlayer ] = useState();
    const [ song, setSong ] = useState();
    const [ track, setTrack] = useState();
    useEffect( async () => {
        const response = await fetch(endpoint, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const my_tracks = await response.json();
        console.log(my_tracks)
        setSavedTracks(my_tracks.items)

    },[])
    const handleClick = (id) => {
        setTrack({"id" : id, "type":"track"})
        setPlayer(true)
    }
    return (
        <div className="savedtracks">
            <h1>SavedTracks</h1>
            {player && <Player track_infos={track}/>}
            {savedTracks && savedTracks.map(tracks => (
                <div key={tracks.track.id}>
                <h2>{tracks.track.name}</h2>
                <img onClick={() => handleClick(tracks.track.id)} src={tracks.track.album.images[0].url} alt="album cover"/>
                </div>
            ))}
        </div> 
    )
}

export default SavedTracks;