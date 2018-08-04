    import React,{ Component} from 'react';
    import NavBar from '../components/NavBar.jsx';
    import Footer from '../components/Footer.jsx';

    import './Home.css';


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


                <div>
                <NavBar/>
                   <div className="container-fluid  bebello-body">
                        <div id="IdCaller" class="container">
                            <div class="row">
                               <div className="col-lg-7 col-md-12 auto-center">
                                 <p className="title-home">Look up a phone number</p>

                                       {/* <form onSubmit={this.handleSubmit}>
                                            <label>
                                            <input className="input-search" type="text" value={this.state.value} onChange={this.handleChange} />
                                            </label>
                                            <input type="submit" value="Submit" />
                                        </form> */}


                                        <div className="txt-search-box">
                                            <div className="p-left"><span>IR +98</span> </div>

                                            <div className="p-center">
                                                <input className="input-search" placeholder="Search number . . ." type="text" value={this.state.value} onChange={this.handleChange} />
                                            </div>
                                            
                                            <div className="p-right">
                                                <i class="fa fa-search"></i>
                                            </div>
                                        </div>

                               </div>
                            </div>
                        </div>
                   </div>


                   <div id="getApp" className="container get-app">
                        <div className="row">
                        <div className="col-lg-6">
                        <span className="get-Info">
                            <p>Get Bebello</p>
                            <p>on your</p>
                            <p>phone.</p>
                        </span>
                       
                        </div>
                        <div className="col-lg-6"></div>
                        </div>                  

                   </div>
                <Footer />
            </div>
            );
        }
    }


    export default Home;
    