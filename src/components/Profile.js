import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Login from '../Login';
import { signOut, auth } from "../firebase"
const Profile = () => {
    const user = useSelector(selectUser);
    return (
        (!user) ? <Login /> :
            <div>
                <h2>Profile</h2>
                <h4>Your email: {user.email}</h4>
                <button onClick={() => signOut(auth)}>Sign Out</button>
            </div>
    )
}

export default Profile