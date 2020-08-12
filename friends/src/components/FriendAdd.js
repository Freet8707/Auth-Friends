import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
    age: 0,
    email: '',
    name: ''
}

const FriendAdd = () => {
    const [newFriend, setNewFriend] = useState(initialState)
    const history = useHistory()
    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setNewFriend({
            ...newFriend,
            age: parseInt(newFriend.age, 10)
        })
        console.log(newFriend)
    }, [newFriend.age])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newFriend)
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res)
            history.push('/friends-list')
        })
        .catch(err => console.log(err.message))
        setNewFriend(initialState)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='age'>
                <input
                    type='text'
                    id='age'
                    name='age'
                    onChange={handleChange}
                    value={newFriend.age}
                    placeholder='Enter age'
                />
            </label>
            <label htmlFor='email'>
                <input
                    type='text'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    value={newFriend.email}
                    placeholder='Enter email'
                />
            </label>
            <label htmlFor='name'>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={newFriend.name}
                    placeholder='Enter name'
                />
            </label>
            <button>Add Friend</button>
        </form>
    )
}

export default FriendAdd