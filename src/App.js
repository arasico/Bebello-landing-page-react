import React, { Component } from 'react';
import { BrowserRouter as  Router , Route } from 'react-router-dom';
import './App.css';


import Home from './pages/Home.jsx';
import Download from './pages/DownloadApp.jsx';
import About from './pages/AboutUs.jsx';


class App extends Component {
  render() {
    return (
 
      <Router>
        <div>
  
          <Route exact path="/" component={Home} />
          <Route  path="/Home" component={Home} />
          <Route  path="/Download" component={Download} />
          <Route  path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
