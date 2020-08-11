import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavEl = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(122, 121, 121, .4);
    color: white;
    h1 {
        padding-left: 70px;
    }
    .headerDiv {
        width: 30%;
        display: flex;
        justify-content: space-between;
        padding-right: 70px;
        a {
            text-decoration: none;
            color: white;
        }       
    }
`;

const Header = () => {

    return (
        <NavEl>
            <h1>Friends</h1>
            <div className='headerDiv'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>login</NavLink>
            </div>
        </NavEl>
    )
}

export default Header