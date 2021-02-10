import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const NewReleases = () => {
    const token = useSelector(state => state.tokenReducer)
    const endpoint = "https://api.spotify.com/v1/browse/new-releases";
    const [ tracks, setTracks ] = useState();
    const [ player, setPlayer ] = useState();
    const [ track_id, setTrack_id ] = useState();
    
    useEffect(() => {
        fetch(endpoint, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( data => { setTracks(data.albums.items)
                        console.log(data)})
    },[])

    const handlePlay = async (id) => {
        console.log('play')
        setTrack_id(id)
        setPlayer(true)
    }
    
    return (
        <div className="NewReleases">
            <h1>New Releases (For You)</h1>
            { player && <iframe src={`https://open.spotify.com/embed/song/${track_id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> }
            { tracks && tracks.map( track => (
                <div key={track.id} className="track">
                    <p>{track.name}</p> 
                    <img onClick={() => handlePlay(track.id)} src={track.images[0].url} alt="album cover"/>
                </div>
            ))} 
           
        </div>
    );
}
  
export default NewReleases;