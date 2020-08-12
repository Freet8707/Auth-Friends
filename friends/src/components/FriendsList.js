import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
    }, [])
    return (
        <></>
    )
}

export default FriendsList