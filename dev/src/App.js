import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './comps/Nav.jsx';
import Posts from './views/Posts.jsx';
import Post from './views/Post.jsx'
import NewPost from './views/NewPost.jsx'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx';
import Videos from './views/Videos.jsx';

const App = () => {

  return (
    <div className="App">
      <Nav/>
      <div className='Routes'>
        <Route exact path='/' component={Home} /> 
        <Route path='/admin' component={Login} />
        <Route path='/posts' component={Posts} />
        <Route path='/post/:id' component={Post} />
        <Route path='/newPost' component={NewPost}/>
        <Route path='/videos' component={Videos} />
      </div>
    </div>
  );
};

export default App;