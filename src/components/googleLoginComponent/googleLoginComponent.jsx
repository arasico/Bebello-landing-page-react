

import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './style.css';


class GoogleLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            appToken : localStorage.getItem('@appTokenBebello'),
            username: localStorage.getItem('@username')
         }
    }


    setItemInlocalStorage = async(key,value) => {
        await  localStorage.setItem(key,value) 

    }

    logOut = async() => {
        localStorage.removeItem('@appTokenBebello')
        localStorage.removeItem('@username');
        window.location.reload();
        
    }


    render() { 


        const responseGoogle = async(response) => {
      

            if(response.tokenId){ 
               await this.setItemInlocalStorage("@appTokenBebello" , response.tokenId);
               await this.setItemInlocalStorage("@username" , response.w3.ig);
               window.location.reload();
            } else{
                console.log("login faild")
            }

        }


        return ( 
            <div className="nav-item bnt-circle btn-primary">
               <GoogleLogin 
                    clientId={window.location.hostname === 'localhost' ? '112770834425-t5i24lm3rif131rqrin24fns7eqjjp0j.apps.googleusercontent.com' : '112770834425-qhnrgd0skump14pjgfa5i97lpoqjsasc.apps.googleusercontent.com'}
                    render={renderProps => (
                    <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i className="fab fa-google"></i>
                        <span> Sign in Google Accounts</span>
                    </div>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
         );
    }
}
 
export default GoogleLoginComponent;