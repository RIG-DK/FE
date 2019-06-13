import React from 'react';

const PostPage = (props) => {

    const post = props.location.state.post

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            <p>{post.body}</p>
        </div>
    )
};


export default PostPage;

