import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export const FooterComponent = () => {
  return(
    <Container>
      <Row>
        <Col md={{ size: 4 }}>
          <img src="https://mavelin-demo.mysirclo.com/resources/images/mavelin.png" className="mb-5" />
          <p>Mavelin is a E-Commerce theme focused to collecting, grouping your content Then selling your stuffs. It is perfect for small-to-high traffic e-commerce bussiness site.</p>
          <p className="mt-auto">COPYRIGHTS <span>&#169;</span> 2017 MAVELIN POWERED BY SIRCLO</p>
        </Col>
        <Col md={{ size: 2, offset: 2 }}>
          <p className="font-weight-bold">Categories</p>
          <a className="text-dark mb-3" href="#">Man</a>
          <a className="text-dark" href="#">Woman</a><br />
          <a className="text-dark" href="#">Sunglasses</a><br />
          <a className="text-dark" href="#">Necklaces</a><br />
          <a className="text-dark" href="#">Sandals</a><br />
          <a className="text-dark" href="#">T-Shirt</a><br />
          <a className="text-dark" href="#">Parents</a><br />
          <a className="text-dark" href="#">Kids</a><br />
          <a className="text-dark" href="#">Jeans</a><br />
          <a className="text-dark" href="#">Jackets</a><br />
          <a className="text-dark" href="#">Blazer</a><br />
          <a className="text-dark" href="#">Luggage</a>
        </Col>
        <Col md={{ size: 2 }}>
          <p className="font-weight-bold">Brand</p>
          <a className="text-dark" href="#">Kenn Munk</a><br />
          <a className="text-dark" href="#">Artistoys</a><br />
          <a className="text-dark" href="#">2K</a><br />
          <a className="text-dark" href="#">Jamungo</a><br />
          <a className="text-dark" href="#">Kenn Munk</a><br />
          <a className="text-dark" href="#">Artistoys</a><br />
          <a className="text-dark" href="#">2K</a><br />
          <a className="text-dark" href="#">Jamungo</a><br />
          
        </Col>
        <Col md={{ size: 2 }}>
          <p className="font-weight-bold">Connect with Us</p>
          <a className="text-dark" href="#">Email Us</a><br />
          <a className="text-dark" href="#">Facebook</a><br />
          <a className="text-dark" href="#">Twitter</a><br />
          <a className="text-dark" href="#">Youtube</a><br />
          <a className="text-dark" href="#">Rdio</a><br />
          <a className="text-dark" href="#">Youtube</a><br />
          <a className="text-dark" href="#">Foursquare</a><br />
          <a className="text-dark" href="#">Newsletter</a><br />
          <a className="text-dark" href="#">Confirm Payment</a><br />
          <a className="text-dark" href="#">RSS</a>
        </Col>
      </Row>
    </Container>
  );
};