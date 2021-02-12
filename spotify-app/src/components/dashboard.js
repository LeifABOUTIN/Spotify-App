import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { user } from '../actions';
import Modal from './modal';


const Dashboard = () => {
    const token = useSelector(state => state.tokenReducer);
    const endpoint = "https://api.spotify.com/v1/me";
    const action = useDispatch();
    const userData = useSelector(state => state.userInfos)
    const loggedIn = useSelector(state => state.isLoggedInReducer)
    const [ modalOn, setModalOn ] = useState(false)
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
        if (localStorage.getItem("modal-seen")==='true') return
        setModalOn(true)
    },[])
    
    return (
        <div className="Dashboard">
            <button id='tips' onClick={() => setModalOn(!modalOn)}>Tips</button>
            { modalOn && <Modal setModalOn={setModalOn}/>}
            { loggedIn && userData &&
            <div className="infos">
                <div className="dashnav">
                    <h1>Dashboard</h1>
                    <h2>Hi {userData.display_name} </h2>
                    <img src={userData.images[0].url} alt="Spotify avatar" height="200px" width="auto"/>
                    <button onClick={() => history.push("/last-tracks")}>RECENTLY PLAYED</button>
                    <button onClick={() => history.push("/new-releases")}>THIS WEEKS'S NEW RELEASE (for you)</button>
                    <button onClick={() => history.push("/saved-tracks")}>YOUR SAVED TRACKS</button>
                </div>

            </div>
            }
        </div>
    );
}
  
export default Dashboard;