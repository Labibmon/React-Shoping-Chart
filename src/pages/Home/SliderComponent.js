/* eslint react/prop-types: 0 */

import React from 'react';
import Slider from "react-slick";
import Zoom from 'react-medium-image-zoom';

export const SliderComponent = (props) => {
  return(
    <Slider 
      dots
      infinite
      speed={500}
      slidesToShow={4}
      slidesToScroll={4} 
      autoplay
      autoplaySpeed={5000}
      variableWidth
      adaptiveHeight>
      {props.dataMap.products.map((data,index)=>{
        return <div key={index} className="product mr-3">
          <Zoom>
            <div className="product--image" style={{ backgroundImage:`url(https://${data.image_file})` }}></div>
          </Zoom>
          <div className="caption">
            <div className="info">
              <label>ACCESORIES</label>
              <h3 className="font-weight-bold my-0">{data.name}</h3>
              <p>IDR 250,000</p>
            </div>
            <div className="diskon px-2">
              <p className="my-0">OFF</p>
              <p className="my-0">90%</p>
            </div>
          </div>
        </div>;
      })}
      <div>
      </div>
    </Slider>
  );
};