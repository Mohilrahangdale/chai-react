import React ,{useContext}from 'react';
import UserContext from "../context/userContext";

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) {
        return <p>No user logged in</p>;
    }
    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    );
}

export default Profile;