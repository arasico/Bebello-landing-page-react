// import React, {Component} from 'react';
// import {Link} from 'react-router';
// import Modal from 'react-modal';
// import GoogleLogin from 'react-google-login';
// import GoogleContacts from 'google-contacts';
 

// import './NavBar.css';


// const customStyles = {
//     content: {
//         marginLeft: '10%',
//         marginRight: '10%',
//         borderRadius:15,
//         color:'#fcfcfc',

//     }
// };


// class NavBar extends Component {

//     constructor() {
//         super()
//         this.state = {
//             isActive: false,
//             appToken : localStorage.getItem('@appTokenBebello'),
//             username: localStorage.getItem('@username')
//         }
//     }

//     componentWillMount() {
//         Modal.setAppElement('body'); 
//     }

//     toggleModal = () => {
//         this.setState({
//             isActive: !this.state.isActive
//         })
//     }

//     componentDidMount() {
//         // console.log(this.state.appToken) 
//     }


//     setItemInlocalStorage = async(key,value) => {
//         await  localStorage.setItem(key,value) 

//     }

//     logOut = async() => {
//         localStorage.removeItem('@appTokenBebello')
//         localStorage.removeItem('@username');
//         window.location.reload();
        
//     }

     

//     render() {


//         const responseGoogle = async(response) => {
//             // let c = new GoogleContacts({
//             //     token: response
//             //   });
               
//             //console.log(c.getContacts(cb, params));
//             console.log(response.tokenId);
//             console.log(response); 
//             // console.log(response.w3.ig); 

//             if(response.tokenId){ 
//                await this.setItemInlocalStorage("@appTokenBebello" , response.tokenId);
//                await this.setItemInlocalStorage("@username" , response.w3.ig);
//                window.location.reload();
//             } else{
//                 alert("login faild")
//             }

//         }



//         return (

//             <div>
//                 <nav className="navbar navbar-expand-lg   navbar-light bg-fff">
//                     <Link className="navbar-brand bebello-logo" to="/Home">

//                     </Link>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//                             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to={"/Home"} activeClassName={"active"}>Home</NavLink>
//                             </li>
//                             <li className="nav-item ">
//                                 <NavLink className="nav-link" to={"/Bebello"} activeClassName={"active"}>Bebello </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to={"/Download"} activeClassName={"active"}>Download
//                                     App</NavLink>
//                             </li>
//                             {this.state.appToken === null ? 
//                                                         <li className="nav-item bnt-circle btn-primary">

//                                                         <GoogleLogin
//                                                         // local host client Id --->
//                                                         //    clientId="112770834425-t5i24lm3rif131rqrin24fns7eqjjp0j.apps.googleusercontent.com"
//                                                            // production client Id --->
//                                                         //    clientId="112770834425-qhnrgd0skump14pjgfa5i97lpoqjsasc.apps.googleusercontent.com"
//                                                            clientId={window.location.hostname === 'localhost' ? '112770834425-t5i24lm3rif131rqrin24fns7eqjjp0j.apps.googleusercontent.com' : '112770834425-qhnrgd0skump14pjgfa5i97lpoqjsasc.apps.googleusercontent.com'}
//                                                            render={renderProps => (
//                                                            <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
//                                                                <i className="fab fa-google"></i>
//                                                               <span> Sign in Google Accounts</span>
//                                                            </div>
//                                                            )}
//                                                            buttonText="Login"
//                                                            onSuccess={responseGoogle}
//                                                            onFailure={responseGoogle}
//                                                            cookiePolicy={'single_host_origin'}
//                                                        />
//                                                    </li>
//                             : 
//                                 <li className="nav-item bnt-circle btn-primary">
//                                     <div onClick={this.logOut} >
//                                         <span> Hi, {this.state.username}</span>
//                                         <i className="far fa-user"></i>
//                                     </div>
//                                 </li>
//                             }
                    

//                         </ul>
//                     </div>

//                 </nav>
//                 <div className="cloud"></div>
//             </div>

//         );
//     }
// }

// export default NavBar;
