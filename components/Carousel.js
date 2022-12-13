import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// export default class Carousel extends Component {
export default function MyCarousel({ imgList }) {
    let imgListUpdated = []
    for(var i=0;i<imgList.length;i++){
        if(imgList[i] && imgList[i] != ""){
            imgListUpdated.push(imgList[i])
        }
    }
        return (
            <Carousel
                showThumbs={false}
            >
                {imgListUpdated.map(image => {
                    
                    return <div style={{height:"500px"}} className='bigImgBox'>
                        <img style={{ height:"100%" }} src={image} />
                    </div> 
                })}
            </Carousel>
        );
}