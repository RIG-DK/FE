import React, { Component } from 'react';
import Nav from './comps/Nav.jsx';
import Post from './comps/Post.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Post/>

      </div>
    );
  }
}

export default App;

/* imports already available: 

-- axios 
-- react-dom 
-- react-router-dom for { Route, BrowserRouter, Link } 
-- styled-components for styled

*/