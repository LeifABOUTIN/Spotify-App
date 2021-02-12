import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Player from './player';

const NewReleases = () => {
    const token = useSelector(state => state.tokenReducer)
    const endpoint = "https://api.spotify.com/v1/browse/new-releases";
    const [ tracks, setTracks ] = useState();
    const [ player, setPlayer ] = useState();
    const [ track, setTrack ] = useState();
    
    
    useEffect(() => {
        fetch(endpoint, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( data => { setTracks(data.albums.items)
                        })
        
        
    },[])
    // const handleMouseover = (e) => {
    //     console.log(e)
    //     // img.innerHTML = <p>click me</p>
    // }
    const handlePlay = async (id) => {
        setTrack({"id": id, "type":"album"})
        setPlayer(true)
    }
    
    return (
        <div className="NewReleases">
            <h1>New Releases (For You)</h1>
            { player && <Player track_infos={track}/>}
            { tracks && tracks.map( track => (
                <div key={track.id} className="track">
                    <p>{track.name}</p> 
                    <img id="albumIMGS" onClick={() => handlePlay(track.id)} src={track.images[0].url} alt="album cover"/>
                </div>
            ))} 
        </div>
    );
}
  
export default NewReleases;