import React, { useState, useEffect } from 'react';
import { PostWrapper, SeeMoreButton, PostsWrapper } from '../scomps.js';
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

    async function filterPosts(e){
        e.preventDefault()
        let relPosts = await posts.filter((p) => {
            return (p.title.toUpperCase().includes(searchInput.toUpperCase()));
        });
        setPosts(relPosts)
    };

    const [posts, setPosts] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) =>  {setSearchInput(e.target.value)};

    useEffect(() => {
        asyncFetch();
    }, []);

    return (
        <div className="wrapper">
            <Link id='icon' to={{
                pathname: '/newPost'
            }}>
                <i className="fal fa-plus-circle"></i> 
            </Link>
            <div className="search">
                <form>
                    <i className="far fa-search"></i>
                    <input
                        onChange={handleChange}
                        placeholder="search posts..." 
                    />
                    <button type="submit" onClick={filterPosts}>Search</button>
                </form>
            </div>
            <PostsWrapper>
                {posts && posts.map(post => {
                    return (
                        <PostWrapper key={post.id}>

                            <h3>{post.title}</h3>
                            <h5>{post.summary}</h5> <br/>
                            <div className="bod" id={post.title.split(' ').join('')}>{parse(post.body)}</div>
                            <div className="links">
                            <Link to={{
                                pathname: `/post/${post.id}`,
                                state: {post: post}
                            }}>
                                <SeeMoreButton> <i className="fas fa-book-reader"></i>   Continue</SeeMoreButton>                        
                            </Link>

                            <SeeMoreButton onClick={() => delPost(post.id)}> Delete   <i className="fas fa-trash-alt"></i></SeeMoreButton>
                            <SeeMoreButton> Edit<i className="fas fa-pencil"></i></SeeMoreButton>
                            </div>

                        </PostWrapper>
                    )
                })}
            </PostsWrapper>
        </div>
    );
};

export default Posts;

