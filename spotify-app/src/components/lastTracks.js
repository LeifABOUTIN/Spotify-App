import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const LastTracks = () => {
    const userData = useSelector(state => state.userInfos)
    const token = useSelector(state => state.tokenReducer)
    const user = useSelector(state => state.userData)
    const endpoint = "https://api.spotify.com/v1/me/player/recently-played";
    const [ tracks, setTracks ] = useState();
    
    useEffect(() => {
        fetch(endpoint, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( data => {
             setTracks(data.items)
             console.log(data.items)})
        
    },[])
    
    return (
        <div className="LastTracks">
            <h1>Latest Tracks</h1>
            {tracks && tracks.map( track => (
                <div key={track.track.id} className="track">
                    <p>{track.track.name}</p> 
                    <img src={track.track.album.images[0].url} alt="album cover"/>
                </div>
            ))}
           
        </div>
    );
}
  
export default LastTracks;