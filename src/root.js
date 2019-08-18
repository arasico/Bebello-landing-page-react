import React, {Component} from 'react'; 
// import Header from "./header/header";
// import Footer from "./footer/footer"; 
import HeaderComponent from './components/headerComponent/heaerComponent';
import FooterComponent from './components/footerComponent/footerComponent';
 
 
 
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

 
   

    render() { 
        return ( 
            <div >
           
                <HeaderComponent />
 
               <div  >
                    { this.props.children}
               </div>
                <FooterComponent />
                
             
              
            </div>
         );
    }
}
 