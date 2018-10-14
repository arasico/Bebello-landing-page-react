import React, { Component } from 'react';
import { BrowserRouter as  Router , Route } from 'react-router-dom';
import './App.css';
 



import Home from './pages/Home.jsx';
import Download from './pages/DownloadApp.jsx';
import About from './pages/AboutUs.jsx';
import Bebello from './pages/Bebello.jsx';
import Search from './pages/Search.jsx';
// import crosel from './pages/crosel.jsx';


class App extends Component {
  render() {
    return (
 
      <Router>
        <div>
  
          <Route exact path="/" component={Home} />
          <Route  path="/Home" component={Home} />
          <Route  path="/Bebello" component={Bebello} />
          <Route  path="/Download" component={Download} />
          <Route  path="/About" component={About} />
          <Route  path="/Search" component={Search} />

        </div>
      </Router>
    );
  }
}

export default App;
