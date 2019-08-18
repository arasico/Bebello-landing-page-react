import React,{ Component} from 'react'; 
import './style.css';


class AboutUsComponent extends Component {

    render()
    { 
        return(

            <div> 
               <div className="container">
                    <div className="card">
                        <div className="card-body">
                            Welcome to About Component
                        </div>
                    </div>
               </div> 
        </div>
        );
    }
}


export default AboutUsComponent;
