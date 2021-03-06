import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
    username: 'Lambda School',
    password: 'i<3Lambd4'
}

const LogIn = (props) => {
    const [newUser, setNewUser] = useState(initialState)
    const history = props.history

   

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewUser(initialState);
        axios.post('http://localhost:5000/api/login', newUser)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
            history.push('/friends-list')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='userInput'>Login: 
                <input 
                    id='userInput'
                    type='text'
                    value={newUser.username}
                    onChange={handleChange}
                    placeholder='Enter username'
                    name='username'
                />
            </label>
            <label htmlFor='passInput'>Password: 
                <input 
                    id='passInput'
                    type='password'
                    value={newUser.password}
                    onChange={handleChange}
                    placeholder='Enter password'
                    name='password'
                />
            </label>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default LogIn