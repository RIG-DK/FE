import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './comps/Nav.jsx';
import Posts from './views/Posts.jsx';
import Post from './views/Post.jsx'
import NewPost from './views/NewPost.jsx'
import Home from './views/Home.jsx'
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts')  
    .then((res) => {
      this.setState({posts: res.data.allPosts})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <div className='Routes'>
          <Route exact path='/' component={Home} />
          <Route path='/posts' render={props => (
            <Posts {...props} posts={this.state.posts}/>
          )} />
          <Route path='/post/:id' component={Post} />
          <Route path='/newPost' component={NewPost}/>
        </div>
      </div>
    );
  }
}
export default App;