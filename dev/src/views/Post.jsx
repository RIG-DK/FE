import React from 'react';
import parse from 'html-react-parser';
import { StyledPost } from '../scomps';

const Post = (props) => {

    const post = props.location.state.post

    return (
        <StyledPost>
            <h1>{post.title}</h1> <br/>
            <h3>{post.summary}</h3> <br/> 
            {parse(post.body)}
        </StyledPost>
    )
};


export default Post;

