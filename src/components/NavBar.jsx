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
            let c = new GoogleContacts({
                token: '216093130728-olt3njcgfb2co0e5fflmdg66dvlukhv3.apps.googleusercontent.com'
              });
               
            //console.log(c.getContacts(cb, params));
            console.log(response.tokenId);
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
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/SignIn"} activeClassName={"active"}>Sign in</NavLink>
                            </li>
                            <li className="nav-item bnt-circle btn-primary">
                                <span onClick={this.toggleModal}>SignUp</span>
                                    <Modal isOpen={this.state.isActive} style={customStyles}
                                        onRequestClose={this.toggleModal}>


                                        <button onClick={this.toggleModal} type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    <h3>Sign in / Sign up</h3>

                                    <div className="btn-group">
                                        <button className="btn btn-secondary btn-lg  " type="button" >
                                            <p>ddfdfdfdfdfdf</p>
                                            {/* <GoogleLogin
                                                clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                            >
                                                <i className="fab fa-google   "></i>
                                                <span> Login with Google</span>
                                            </GoogleLogin> */}

                                                <GoogleLogin
                                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                                    render={renderProps => (
                                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                                                    )}
                                                    buttonText="Login"
                                                    onSuccess={responseGoogle}
                                                    onFailure={responseGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                />



                                        </button>
                                    </div>




                                        </Modal>
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
