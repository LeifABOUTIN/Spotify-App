import { useState, useEffect } from 'react';
const Spotify = () => {
    const [ accessToken, setAccessToken ] = useState(null)
    const client_id = "e30f75f3d5e6414884fc4f837c0c2981";
    const client_secret = "2d9b9eb493e34461b9afa9cb0c8f83d0";
    const myURL = "http://localhost:3000";

    const handleConnexion = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${myURL}&scope=user-read-private`
    }
    useEffect(() => {
        getToken()
    },[])

    const getToken = () => { 
        const currentURL = window.location.href
        const code_token = currentURL.split('?code=')[1]
        if (code_token !== undefined){ 
            const data = new URLSearchParams({
                'client_id': client_id,
                'client_secret': client_secret,
                'grant_type': 'authorization_code',
                'code': code_token,
                'redirect_uri': myURL
                })
            fetch("https://accounts.spotify.com/api/token", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data
                })
                .then( res => res.json())
                .then( result => setAccessToken(result.access_token))
                .catch( err => console.log(err))
                }
    }
    return (
        <div className="Spotify">
            <h1>Spotify</h1>
            <div className="infos">
                <button onClick={()=> handleConnexion()} className="connect">LOGIN TO SPOTIFY</button>
                { accessToken && <p>{accessToken}</p>}
            </div>
        </div>
    );
}
  
export default Spotify;