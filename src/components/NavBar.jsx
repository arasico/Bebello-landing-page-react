import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component{

    render(){
        return(

                <div>
                                <nav className="navbar navbar-expand-lg navbar-light bg-fff">
                <Link className="navbar-brand bebello-logo" to="/Home">

                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Home">Bebello <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Download">Download App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SignIn">Sign in</Link>
                    </li>
                    <li className="nav-item bnt-circle btn-primary">
                        <Link className="nav-link" to="/SignUp">Sign Up Free</Link>
                    </li>
                    
    
                    </ul>
                </div>
              
        </nav>
          <div className="cloud">
 
      </div>
                </div>

        );
    }
}

export default NavBar;
