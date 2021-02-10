import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { user } from '../actions';


const Dashboard = () => {
    const token = useSelector(state => state.tokenReducer);
    const endpoint = "https://api.spotify.com/v1/me";
    const action = useDispatch();
    const userData = useSelector(state => state.userInfos)
    const loggedIn = useSelector(state => state.isLoggedInReducer)
    let history = useHistory();

    useEffect(() => {
        fetch(endpoint, {
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( data => action(user(data)))
        
    },[])
    
    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            { loggedIn && userData &&
            <div className="infos">
                <h2>Hi {userData.display_name} </h2>
                <img src={userData.images[0].url} alt="Spotify avatar" height="200px" width="auto"/>
                <button onClick={() => history.push("/last-tracks")}>RECENTLY PLAYED</button>
                <button onClick={() => history.push("/new-releases")}>YOUR LAST LIKED SONGS</button>
                <button onClick={() => history.push("/saved-tracks")}>YOUR SAVED TRACKS</button>


            </div>
            }
        </div>
    );
}
  
export default Dashboard;