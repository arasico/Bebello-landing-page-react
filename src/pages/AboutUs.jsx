import React,{ Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';


class AboutUs extends Component {

    render()
    {

        return(

            <div>
            <NavBar/>
               <div className="container">
                    <div className="card">
                        <div className="card-body">
                            Welcome to About Component
                        </div>
                    </div>
               </div>
            <Footer />
        </div>
        );
    }
}


export default AboutUs;
