import React from 'react';
import {NavWrapper} from '../scomps.js'

const Nav = (props) => {
    return (
        <NavWrapper>
            <a id='home' href='#'><h1>DK</h1></a>
            <div className='links'>
                <a href='#'><h4>About</h4></a>
                <a href='#'><h4>Posts</h4></a>
                <a href='#'><h4>Videos</h4></a>
                <a href='#'><h4>Chat</h4></a>
                <a href='#'><h4>Glossary</h4></a>
            </div>
        </NavWrapper>
    )
}

export default Nav;