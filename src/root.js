import React, {Component} from 'react';
import {browserHistory } from 'react-router'
// import Header from "./header/header";
// import Footer from "./footer/footer";
import IndexComponent from "./container/beforLogin/inddex/index";
import HeaderComponent from './components/headerComponent/heaerComponent';
 
 
 
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

 
   

    render() { 
        return ( 
            <div >
           
                <HeaderComponent/>
 
               <div className="container-fluid">
                    { this.props.children}
               </div>
                   
                
             
              
            </div>
         );
    }
}
 