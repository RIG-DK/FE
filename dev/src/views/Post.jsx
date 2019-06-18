import React from 'react';
import parse from 'html-react-parser';

const Post = (props) => {

    const post = props.location.state.post

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            {parse(post.body)}
        </div>
    )
};


export default Post;

