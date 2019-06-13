import React from 'react';
import {NavWrapper} from '../scomps.js';
import {Link} from 'react-router-dom';


const Nav = (props) => {
    return (
        <NavWrapper>
            <Link to={{pathname: `/`}} id='home'> 
                <h1>DK</h1> 
            </Link>
            <div className='links'>
                <Link to={{pathname: `/posts`}}> <h4>Posts</h4> </Link>
                <Link to={{pathname: `/newPost`}}> <h4>New</h4> </Link>
                <h4>Videos</h4>
                <h4>Chat</h4>
                <h4>Glossary</h4>
            </div>
            <img src='../images/mathWheel3.png' alt=''/>
        </NavWrapper>
    )
}

export default Nav;