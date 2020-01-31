import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BannerComponent } from './Home/BannerComponent';
import { womenProduct, menProduct, accesoriesProduct } from '../Utils/Utils';
import { SliderComponent } from './Home/SliderComponent';

class Home extends Component {

  render(){
    return(
      <Container className="mb-5">
        <Row>
          <Col md={12} className="mb-5">
            <BannerComponent />
          </Col>
          <Col className="mb-md-0 mb-3" md={4}>
            <img 
              style={{ width: '100%' }} 
              src="https://files.sirclocdn.xyz/frontend-test-37/images/this-month-banner-slider.jpg"></img>
          </Col>
          <Col className="mb-md-0 mb-3" md={4}>
            <img 
              style={{ width: '100%' }} 
              src="https://files.sirclocdn.xyz/frontend-test-37/images/this-month-banner-slider.jpg"></img>
          </Col>
          <Col md={4}>
            <img 
              style={{ width: '100%' }} 
              src="https://files.sirclocdn.xyz/frontend-test-37/images/this-month-banner-slider.jpg"></img>
          </Col>
          <Col md={12} className="mt-5">
            <div className="mb-5 px-3">
              <h3>POPULAR IN WOMEN</h3>
              <SliderComponent dataMap={womenProduct} />
              <h3>POPULAR IN MEN</h3>
              <SliderComponent dataMap={menProduct} />
              <h3>POPULAR IN ACCESORIES</h3>
              <SliderComponent dataMap={accesoriesProduct} />
            </div>
            <hr />
            <div>
              <h6 className="font-weight-bold">KOLEKSI LENGKAP FASHION DARI BRAND-BRAND TERBAIK</h6>
              <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, aliquam. Cumque ullam reprehenderit possimus veritatis ratione sint quas labore, impedit culpa voluptatum soluta odio quam ipsa dolor provident, totam voluptates!</p>
              <h6 className="font-weight-bold">BELANJA FASHION DI INDONESIA</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, aliquam. Cumque ullam reprehenderit possimus veritatis ratione sint quas labore, impedit culpa voluptatum soluta odio quam ipsa dolor provident, totam voluptates!</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;  