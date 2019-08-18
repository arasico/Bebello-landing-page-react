import React,{ Component} from 'react';
import { Link , Redirect } from 'react-router-dom'; 

import './style.css';
import mobilePhoto from '../../assets/img/app.png'


class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
      
      }
    
      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    
      handleSubmit = (event) =>  {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      _onClick(){
       
        alert("User is No Login!");
         
      }

      state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
     


    render()
    {

        return(


            <div className="home-page">
          
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
                                        
                                        {/* <div onClick={this.setRedirect} className="p-right">
                                            <i className="fa fa-search"></i>
                                        </div> */}

                                            <Link onClick={this._onClick.bind(this)} to={"/Search"} className="p-right">
                                            <i className="fa fa-search"></i>
                                        </Link>
                                        
                                    </div>
                                <div style={{width:'100%', height:'200px'}}></div>
                           </div>
                        </div>
                    </div>
               </div>


               <div className="container get-app">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <span className="get-Info">
                                <p>Get <span className="bebello-logo-type">Bebello</span> </p>
                                <p>on your</p>
                                <p>phone.</p>
                            </span>
                            <p className="text-decor">The best caller ID and block for all your calls and SMS.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-5 col-sm-10">
                                    <Link  to="Download" className="btn-home btn-download">Download App</Link>
                                </div>
                                <div className="col-lg-6 col-md-5 col-sm-10">
                                    <Link  to="#" className="btn-home btn-black">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img className="mobile-app img-fluid" alt="Bebello" src ={mobilePhoto} />
                        </div>
                    </div>  

                          

               </div>
              
        </div>
        );
    }
}


export default HomeComponent;
