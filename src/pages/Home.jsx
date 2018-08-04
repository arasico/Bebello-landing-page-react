    import React,{ Component} from 'react';
    import { Link } from 'react-router-dom';
    import NavBar from '../components/NavBar.jsx';
    import Footer from '../components/Footer.jsx';

    import './Home.css';
    import mobilePhoto from '../images/app.png'


    class Home extends Component {

        constructor(props) {
            super(props);
            this.state = {value: ''};
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
        
          handleChange(event) {
            this.setState({value: event.target.value});
          }
        
          handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
          }



        render()
        {

            return(


                <div className="home-page">
                <NavBar />
                   <div className="container-fluid  bebello-body">
                        <div  className="container">
                            <div className="row">
                               <div className="col-lg-7 col-md-12 auto-center">
                                 <p className="title-home">Look up a phone number</p>
                                        <div className="txt-search-box">
                                            <div className="p-left"><span>IR +98</span> </div>

                                            <div className="p-center">
                                                <input className="input-search" placeholder="Search phone number or Email . . ." type="text" value={this.state.value} onChange={this.handleChange} />
                                            </div>
                                            
                                            <div className="p-right">
                                                <i className="fa fa-search"></i>
                                            </div>
                                        </div>

                               </div>
                            </div>
                        </div>
                   </div>


                   <div className="container get-app">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="get-Info">
                                    <p>Get <span className="bebello-logo-type">Bebello</span> </p>
                                    <p>on your</p>
                                    <p>phone.</p>
                                </span>
                                <p className="text-decor">The best caller ID and block for all your calls and SMS.</p>
                                <div className="row">
                                    <div className="col-6">
                                        <Link  to="Download" className="btn-home btn-download">Download App</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link  to="#" className="btn-home btn-black">Know More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="mobile-app" src ={mobilePhoto} />
                            </div>
                        </div>  

                              

                   </div>
                   <div className="cloud-dark"></div>         
                <Footer />
            </div>
            );
        }
    }


    export default Home;
    