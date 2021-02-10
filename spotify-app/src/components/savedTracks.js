import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SavedTracks = () => {
    const endpoint = "https://api.spotify.com/v1/me/tracks";
    const token = useSelector( state => state.tokenReducer);
    const [ savedTracks, setSavedTracks ] = useState();
    const [ player, setPlayer ] = useState();
    const [ song, setSong ] = useState();
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
        setSong(id)
        setPlayer(true)
    }
    return (
        <div className="savedtracks">
            <h1>SavedTracks</h1>
            {player && <iframe src={`https://open.spotify.com/embed/track/${song}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>}
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