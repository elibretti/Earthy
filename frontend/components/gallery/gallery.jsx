import React from 'react';
import Slider from 'react-slick';
import {withRouter} from 'react-router-dom';


class Gallery extends React.Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 1300,
            autoplaySpeed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1, 
            autoplay: true,
        };
    return (
        <div className ='gallery'>
            <p> Find products that save the planet.</p> 
            <Slider {...settings}>
            <div className ="slide-1">
            </div>
            <div  className ="slide-2">
            </div>
            <div className ="slide-3">
            </div>
            <div className ="slide-4">
            </div>
            <div  className ="slide-5"> 
            </div>
            </Slider>
        </div>
        );
    }

}
export default withRouter(Gallery);