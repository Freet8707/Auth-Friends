import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

const Friend = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px dashed gray;
    margin: 20px 25px 0 25px;
    background-color: rgba(122, 121, 121, .4);
    color: white;
`;

const Container = styled.div`
    width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const FriendCard = props => {
    const friend = props.friend;
    // console.log(friend)
    return (
        <Link to={`/friends-list/${friend.id}`}>
            <Friend>
                <h1>{friend.name}</h1>
                <h3>{friend.age}</h3>
                <h3>{friend.email}</h3>
            </Friend>
        </Link>
    )
}

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err.message))
    }, [])

    return (
        <div className='componentDiv'>
            <button onClick={() => {
                history.push('/friend-add')
            }}>Add A New Friend!</button>
            <Container>
                {friends.length === 0 ? <h2 style={{color: 'red'}}>Fetching Friends Data...</h2> :
                    friends.map((f, index) => {
                        return <FriendCard key={index} friend={f} />
                    })
                }
            </Container>
        </div>
    )
}

export default FriendsList