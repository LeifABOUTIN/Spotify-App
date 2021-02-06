import { useState, useEffect } from 'react';
const Spotify = () => {
    const [ accessToken, setAccessToken ] = useState()
    const client_id = "e30f75f3d5e6414884fc4f837c0c2981";
    const client_secret = "2d9b9eb493e34461b9afa9cb0c8f83d0";
    const base64encoded = "ZTMwZjc1ZjNkNWU2NDE0ODg0ZmM0ZjgzN2MwYzI5ODE6MmQ5YjllYjQ5M2UzNDQ2MWI5YWZhOWNiMGM4ZjgzZDA="
    const myURL = "http://localhost:3000";
    // const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${myURL}&scope=user-read-private`;
    // useEffect(() => {
    //     fetch(url)
    //     .then( res => res.json())
    //     .then( data => console.log(data))
    //     .catch( err => console.log(err))
    // })
    const handleConnexion = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${myURL}&scope=user-read-private`
    }
    useEffect(() => {
        getToken()
    },[accessToken])
    const getToken = () => { 
        const currentURL = window.location.href
        const acces_token = currentURL.split('?code=')[1]
        acces_token && setAccessToken(acces_token)
        const data = {
            'grant_type': 'authorization_code',
            'code': acces_token,
            'redirect_uri': myURL
        }
        accessToken && 
           
            fetch("https://accounts.spotify.com/api/token", {
                method: 'POST',
                headers: {
                    'Content-Type': `Basic ${base64encoded}`
                },
                data: JSON.stringify(data)
            })
            .then( res => res.json())
            .then( result => console.log(result))
    }

    return (


      <div className="Spotify">
          <h1>Spotify</h1>
          <button onClick={()=> handleConnexion()} className="connect">LOGIN TO SPOTIFY</button>
      </div>
    );
  }
  
  export default Spotify;