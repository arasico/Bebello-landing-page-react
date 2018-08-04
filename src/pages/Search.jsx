    import React,{ Component} from 'react';
    import { Link } from 'react-router-dom';
    import NavBar from '../components/NavBar.jsx';
    import Footer from '../components/Footer.jsx';

    import './Search.css'; 


    class Search extends Component {
 
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

          _onClick(){
              alert("Hello, did you click it!")
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
                                            
                                            <div onClick={this._onClick.bind(this)} className="p-right">
                                                <i className="fa fa-search"></i>
                                            </div>
                                        </div>

                               </div>

                                <div className="no-login">
                                    <p><h2>You need to sign in to view this result!</h2></p>
                                    <div className="auto-center col-lg-4 col-sm-11">
                                        <Link  to="Download" className="btn-home btn-download">Sign in / Sign Up</Link>
                                    </div>
                                </div>


                            </div>
                        </div>

                       
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
                <Footer />
            </div>
            );
        }
    }


    export default Search;
    