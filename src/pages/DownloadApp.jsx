import React,{ Component} from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

import './DownloadApp.css';

class Download extends Component {

    render()
    {

        return(


                <div>
                    <NavBar/>
                       <div className="container-fluid bebello-body">
                            <div className="slider"> </div>
                       </div>

                       <div className="container download-box">
                            <div className="section-download">
                                <h1 className="download-title">Call people not numbers</h1>
                                <h4>Replace unknown numbers in your call history with names and photos and see if your friends are busy before you call.</h4>
                            </div>

                           <div className="row ">
                                <div className="col-lg-8 auto-center">
                                    <div className="row">
                                        <div className="col-6">
                                            <Link  to="Download" className="btn-home btn-download "><i className="fab fa-apple  fa-styleing"></i> Download IOS</Link>
                                        </div>
                                        <div className="col-6">
                                            <Link  to="#" className="btn-home btn-download  "><i className="fab fa-android  fa-styleing"></i> Download Android</Link>
                                        </div>
                                    </div>
                                </div>
                           </div>


                       </div>
                    <Footer />
                </div>
        );
    }
}


export default Download;
