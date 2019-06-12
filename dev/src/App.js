import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './comps/Nav.jsx';
import PostSum from './comps/PostSum.jsx';
import PostPage from './views/PostPage.jsx'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav/>
        <div className='Routes'>
          <Route exact path='/' component={PostSum} />
          <Route path='/post/:id' component={PostPage} />
        </div>
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