import React,{useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/userContext';

const Profile = () => {
    const userContext = useContext(UserContext);
    useEffect(() => {
        axios.get('http://localhost:8000/profile')
            .then(res => {
                console.log(res);
                if(res.data.message === "Not loggedIn"){
                    window.location.href = "http://localhost:3000/login"
                } else {
                    userContext.userDispatch({type: "FETCH_SUCCESS", payload: res.data});
                }
            })
            .catch(err => {
                userContext.userDispatch({type: "FETCH_ERROR"})
            })
        // axios.get('http://localhost:8000/auth/login')
        //     .then(res => {
        //         authContext.authDispatch({type: "FETCH_SUCCESS", payload: res.data.message})
        //     })
        //     .catch(err => {
        //         authContext.authDispatch({type: "FETCH_ERROR"})
        //     })
    },[])

    return(
        <div>
            <h1>Welcome {userContext.userStateData.userData.name}</h1>
            <h2>Your username is {userContext.userStateData.userData.username}</h2>
            <img src={userContext.userStateData.userData.profile_avatar} alt="user-profile"/>
        </div>
    )
}

export default Profile