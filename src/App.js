import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';

import './App.css';
 

// component root ----->
import RootComponent from './root';
import HomeScreen from './container/home/homeComponent';
import SearchScreen from './container/search/searchComponent';
import DownloadAppScreen from './container/downloadApp/downloadAppComponent';
import AboutUsScreen from './container/aboutUs/aboutUsComponent';
import BebelloScreen from './container/bebello/bebelloComponent';
 


class App extends Component {
  render() {
    return ( 
      <Router history={browserHistory}>
          <Route  component={RootComponent}> 
              <Route  path="/" component={HomeScreen} />
              <Route  path="/home" component={HomeScreen} />
              <Route  path="/search" component={SearchScreen} />
              <Route  path="/download" component={DownloadAppScreen} />
              <Route  path="/about-us" component={AboutUsScreen} />
              <Route  path="/bebello" component={BebelloScreen} />
          </Route>
      </Router>
    );
  }
}

export default App;
