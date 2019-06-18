import React, { useState, useEffect } from 'react';
import { PostWrapper, SeeMoreButton } from '../scomps.js';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';

const Posts = () => {
    
    async function delPost(id) {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        const posts = await axios.get('http://localhost:3000/posts');
        setPosts(posts.data.allPosts);
    };

    async function asyncFetch() {
        const posts = await axios.get('http://localhost:3000/posts');
        setPosts(posts.data.allPosts);
    };

    useEffect(() => {
        asyncFetch();
    }, []);

    const [posts, setPosts] = useState(null);

    return (
        <div className="wrapper">
            {posts && posts.map(post => {
                return (
                    <PostWrapper>

                        <h3>{post.title}</h3>
                        <h5>{post.summary}</h5> <br/>
                        <div className="bod" id={post.title.split(' ').join('')}>{parse(post.body)}</div>

                        <Link to={{
                            pathname: `/post/${post.id}`,
                            state: {post: post}
                        }}>
                            <SeeMoreButton>Continue Reading</SeeMoreButton>                        
                        </Link>

                        <SeeMoreButton onClick={() => delPost(post.id)}>Delete</SeeMoreButton>
                        <SeeMoreButton>Edit</SeeMoreButton>

                    </PostWrapper>
                )
            })}
        </div>
    );
};

export default Posts;

