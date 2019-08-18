import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';

import './App.css';
 


import RootComponent from './root';
import HomeScreen from './container/home/homeComponent';
import SearchScreen from './container/search/searchComponent';
import DownloadAppScreen from './container/downloadApp/downloadAppComponent';
// import Download from './pages/DownloadApp.jsx';
// import About from './pages/AboutUs.jsx';
// import Bebello from './pages/Bebello.jsx';
// import Search from './pages/Search.jsx';
// import crosel from './pages/crosel.jsx';


class App extends Component {
  render() {
    return (
 
      <Router history={browserHistory}>
        <Route  component={RootComponent}> 
   
          <Route  path="/" component={HomeScreen} />
          <Route  path="/home" component={HomeScreen} />
          <Route  path="/search" component={SearchScreen} />
          <Route  path="/download" component={DownloadAppScreen} />
          {/*  
          <Route  path="/Bebello" component={Bebello} />
          <Route  path="/Download" component={Download} />
          <Route  path="/About" component={About} />
          <Route  path="/Search" component={Search} /> */}

        </Route>

      </Router>
    );
  }
}

export default App;
