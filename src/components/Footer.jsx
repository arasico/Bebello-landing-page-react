import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

class Footer extends Component{
    render(){
        return(

                <div className="footer">
                  <div className="cloud-dark"></div>         
                                <div className="Footer-bebello container-fluid">
                <div className="container">
                    <div className=" row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="footer-bar">
                                        <li className="footer-item-header">PRODUCT</li>
                                        <li> <Link className="footer-item" to="#">Get the app</Link></li>
                                        <li> <Link className="footer-item" to="#">Support</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-4">
                                    <ul className="footer-bar">
                                        <li className="footer-item-header">COMPANY</li>
                                        <li> <Link className="footer-item" to="#">About Us</Link></li>
                                        <li> <Link className="footer-item" to="#">Submit feedback</Link></li>
                                        <li> <Link className="footer-item" to="#">Careers</Link></li>
                                        <li> <Link className="footer-item" to="#">Contact Us</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-4">
                                    <ul className="footer-bar">
                                        <li className="footer-item-header">COMMUNITY</li>
                                        <li> <Link className="footer-item" to="#">Blog</Link></li>

                                    </ul>
                                </div>                   
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="row ">
                                <div className="col-lg-8 pp ">
                                    <div className="pxt"><i className="fas fa-globe-americas fa-3x"></i></div>
                                    
                                                <button className="btn  dropdown-toggle pyt" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Language : English
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" to="#">English</a>
                                                    <a className="dropdown-item" to="#">Farsi</a>
                                                </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="under-footer">
                    <div><span>Hand-crafted with</span> <i className="fas fa-heart heart-red"></i> <span>By Bebello © {new Date().getFullYear()}</span> </div>
                    </div>
            </div>
        );
    }
}


export default Footer;

