import React, { Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Icon } from 'semantic-ui-react';


export const FooterComponent = () => {
  return(
    <Fragment>
      <div className="bg-light">
        <Container>
          <Row>
            <Col className="d-md-flex justify-content-center p-3" md={{ size: 12, order:0 }}>
              <a className="text-dark mx-3" href='#'><Icon name="facebook f" size='large' /></a>
              <a className="text-dark mx-3" href='#'><Icon name="twitter" size='large' /></a>
              <a className="text-dark mx-3" href='#'><Icon name="instagram" size='large' /></a>
              <a className="text-dark mx-3" href='#'><Icon name="pinterest" size='large' /></a>
              <form className="mt-md-0 mt-3 border-bottom">
                <input className="border-0 bg-light" />
                <Button className="boder-bottom text-dark" color="link">Subscribe</Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5">
        <Row>
          <Col className="mb-4" md={{ size: 4, order:0 }} xs={{ order:3 }}>
            <img src="https://mavelin-demo.mysirclo.com/resources/images/mavelin.png" className="mb-4" />
            <p>Mavelin is a E-Commerce theme focused to collecting, grouping your content Then selling your stuffs. It is perfect for small-to-high traffic e-commerce bussiness site.</p>
            <p className="mt-5">COPYRIGHTS <span>&#169;</span> 2017 MAVELIN POWERED BY SIRCLO</p>
          </Col>
          <Col className="mb-4" md={{ size: 2, offset: 2 }}>
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
          <Col className="mb-4" md={{ size: 2 }}>
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
          <Col className="mb-4" md={{ size: 2 }}>
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
    </Fragment>
  );
};