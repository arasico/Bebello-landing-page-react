import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';
import GoogleContacts from 'google-contacts';
 

import './NavBar.css';


const customStyles = {
    content: {
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius:15,
        color:'#fcfcfc',

    }
};


class NavBar extends Component {

    constructor() {
        super()
        this.state = {
            isActive: false
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }
    
    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {


        const responseGoogle = (response) => {
            // let c = new GoogleContacts({
            //     token: response
            //   });
               
            //console.log(c.getContacts(cb, params));
            console.log(response.tokenId);
            console.log(response); 
            console.log(response.w3.ig); 

        }


        return (

            <div>
                <nav className="navbar navbar-expand-lg   navbar-light bg-fff">
                    <Link className="navbar-brand bebello-logo" to="/Home">

                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Home"} activeClassName={"active"}>Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" to={"/Bebello"} activeClassName={"active"}>Bebello </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/Download"} activeClassName={"active"}>Download
                                    App</NavLink>
                            </li>
                            <li className="nav-item bnt-circle btn-primary">

                                 <GoogleLogin
                                    clientId="112770834425-t5i24lm3rif131rqrin24fns7eqjjp0j.apps.googleusercontent.com"
                                    render={renderProps => (
                                    <div onClick={renderProps.onClick} disabled={renderProps.disabled}>sign in with google account</div>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </li>
                    

                        </ul>
                    </div>

                </nav>
                <div className="cloud"></div>
            </div>

        );
    }
}

export default NavBar;
