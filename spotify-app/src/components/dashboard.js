import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { user } from '../actions';


const Dashboard = () => {
    const [ userInfos, setUserInfos ] = useState();
    const token = useSelector(state => state.tokenReducer)
    const endpoint = "https://api.spotify.com/v1/me"

    useEffect(() => {
        console.log(token)
        fetch(endpoint, {
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( data => setUserInfos(data))
    },[])
    
    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            { userInfos && 
            <div className="infos">
                <p>{JSON.stringify(userInfos)}</p>
                <h2>Hi {userInfos.display_name} </h2>
            </div>
            }
        </div>
    );
}
  
export default Dashboard;