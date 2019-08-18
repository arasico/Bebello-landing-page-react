import React,{ Component} from 'react';  

import './style.css';
import mobilePhoto from '../../assets/img/iphone.webp'
import bebellologo from '../../assets/img/logo.png'


class BebelloComponent extends Component {



    render()
    {

        return(


            <div className="home-page"> 
               <div className="container-fluid  bebello-body bg-caller">
                    <div  className="container p-1">
                        <p><h2><b>Bebello,</b> </h2></p>
                        <h2><b>We're on a journey.</b> </h2>
                        <p>Remember the days when the phone rang and you did not know who it was? Maybe you were sick, or maybe just a stubborn guy trying to sell you something.</p>

                        <p>Bebello was born out of this uncertainty. We wanted to make it possible for you to know who's trying to contact you. We wanted to remove all uncertainty and separate the important stuff from the noise.</p>

                        <p>Hundreds of millions of users later, we can gladly say those days of uncertainty are over.</p>

                        <p>Today we see a new world. Something more than just known phone numbers. Technology making life easier is great, but infinite connectivity is creating infinite complexity, putting up new forms of trust barriers. And mutual trust is the very foundation for friendship, business relationships or for just being a good neighbor.</p>

                        <p>We are committed to building that. No matter if it is in the middle of a transaction.</p>

                        <p>And we're just getting started.</p>
                        <p> <img className="img-boxing img-fluid" alt="Bebello" src ={bebellologo} /></p>
                    </div>
               </div>


               <div className="container next-ssection ">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 p-down">
                            <h2><b>Find whoever you are!</b> </h2>
                                <ul>
                                    <li>Search by Mobile number, Tellphone, fax.</li>
                                    <li>Search by email.</li>
                                    <li>View professional and professional information.</li>
                                    <li>Show address, zip code and ...</li>
                                    <p></p>
                                </ul>
                               <p> <h2><b>Bebello work on:</b> </h2></p>
                                <div className="platform-style">
                                    <span className="p-4"><i className="fab fa-apple"></i></span>
                                    <span className="p-4"><i className="fab fa-android"></i></span>
                                    <span className="p-4"><i className="fab fa-windows"></i></span>
                                    <span className="p-4"><i className="fab fa-linux"></i></span>
                                </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img className="img-boxing img-fluid" alt="Bebello" src ={mobilePhoto} />
                        </div>
                    </div>
        
             </div>   
        </div>
        );
    }
}


export default BebelloComponent;
