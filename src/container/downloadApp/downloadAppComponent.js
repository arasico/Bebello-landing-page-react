import React,{ Component} from 'react';
import { Link } from "react-router"; 

 

class DownloadAppComponent extends Component {

 
        
    

    render()
    { 

        return(


                <div>
 
                       <div className="container-fluid bebello-body">
                            
                       
                             <img src={require('../../assets/img/app.png')} width="400" alt=""/>
                     
                             
                         
                       </div>

                       <div className="container download-box">
                            <div className="section-download">
                                <h1 className="download-title">Call people not numbers</h1>
                                <h4>Replace unknown numbers in your call history with names and photos and see if your friends are busy before you call.</h4>
                            </div>
  

                           <div className="row ">
                                <div className="col-lg-8 auto-center">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <Link  to="Download" className="btn-home btn-download "><i className="fab fa-apple  fa-styleing"></i> Download IOS</Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <Link  to="#" className="btn-home btn-download  "><i className="fab fa-android  fa-styleing"></i> Download Android</Link>
                                        </div>
                                    </div>
                                </div>
                           </div> 
                       </div> 
                </div>
        );
    }
}


export default DownloadAppComponent;
