import React from 'react';
import { NavWrapper } from '../scomps.js';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <NavWrapper>
            <Link to={{pathname: `/`}} id='home'> 
                <img src='../images/mathWheel3.png' alt=''/>    
                {/* <h2>Seeing in Principles</h2>  */}
            </Link>
            <div className='links'>
                {!localStorage.getItem('jwt') ? <Link to={{pathname: `/admin`}}> <h4>Login</h4> </Link> : <h4>Logout</h4> }
                <Link to={{pathname: `/posts`}}> <h4>Posts</h4> </Link>
                <Link to={{pathname: `/videos`}}> <h4>Videos</h4> </Link>
                <h4>Glossary</h4>
                <h4>Contact</h4>
            </div>
        </NavWrapper>
    )
};

export default Nav;