import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friend = () => {
    const params = useParams()
    console.log(params)
    const [friend, setFriend] = useState({})

    useEffect(() => {
        axiosWithAuth().get(`http://localhost:5000/api/friends/${params.id}`)
        .then(res => {
            // console.log(res)
            setFriend(res.data)
        })
        .catch(err => console.log(err.message))
    }, [])
    
    return (
        <div className='homeDiv'>
            <p style={{margin: '0', padding: 'none'}}>{friend.name}</p>
        </div>
    )
}

export default Friend