// import React from 'react';
// import Carousel from 'nuka-carousel';

// export default class extends React.Component {
//   state = {
//     slideIndex: 0
//   };

//   render() {
//     return (
//       <Carousel
//         slideIndex={this.state.slideIndex}
//         afterSlide={slideIndex => this.setState({ slideIndex })}
//       >
//         <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
//         <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
//         <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
//         <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
//         <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
//         <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
//       </Carousel>
//     );
//   }
// }

import React,  {Component} from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './crosel.css';

import arasemami from '../images/app.png'

export default class corsel extends Component{

  
  render()
  {

     

      const content = [
        {
          title: 'Arasico',
          
          image: {arasemami},
          user: 'Luan Gjokaj',
          userProfile: 'https://i.imgur.com/JSW6mEk.png'
        },
        {
          title: 'Tortor Dapibus Commodo Aenean Quam',
          description:
          'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
          button: 'Discover',
          image: 'https://i.imgur.com/DCdBXcq.jpg',
          user: 'Erich Behrens',
          userProfile: 'https://i.imgur.com/0Clfnu7.png'
        },
        {
          title: 'Phasellus volutpat metus',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
          button: 'Buy now',
          image: 'https://i.imgur.com/DvmN8Hx.jpg',
          user: 'Bruno Vizovskyy',
          userProfile: 'https://i.imgur.com/4KeKvtH.png'
        }
      ];


      return(
<div>

 
 
<Slider className="slider-wrapper">
			{content.map((item, index) => (
				// <div
				// 	key={index}
				// 	className="slider-content"
				// 	style={{ background: `url('${item.image}') no-repeat center center` }}
				// >
				// 	<div className="inner">
				// 		<h1>{item.title}</h1>
				// 		<p>{item.description}</p>
				// 		<button>{item.button}</button>
				// 	</div>
				// 	<section>
				// 		<img src={item.userProfile} alt={item.user} />
				// 		<span>
				// 			Posted by <strong>{item.user}</strong>
				// 		</span>
				// 	</section>
        // </div>
        
				<img
					key={index}
					className="slider-content"
					src={item.image[index]}
				/>
        
			))}
		</Slider>


 <img src={arasemami} alt=""/>
</div>
 

      )
  }

    }
 
