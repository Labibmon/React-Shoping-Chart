import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  render(){
    return(
      <Container className="mb-5">
        <Row>
          <Col md={12}>
            <p>hello</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;  