import React from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import {
  useLocation
} from "react-router-dom";
import { Icon } from 'semantic-ui-react';


export const HeaderComponent = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  return(
    <Container>
      <Row>
        <Col 
          md={{ order:0, size: 4 }} 
          xs={{ order:0, size: 12 }} 
          className="d-flex align-items-center my-4">
          <Input type="select" name="select" id="exampleSelect" style={{ width: '5rem' }}>
            <option>IDR</option>
          </Input>
          <Label for="exampleSelect" className="ml-3">
            <a 
              className={query.get("lang") === "id" ? "text-dark font-weight-bold" : 'text-secondary'}
              href="/?lang=id">BAHASA</a>{" - "}
            <a 
              className={query.get("lang") === "en" ? "text-dark font-weight-bold" : 'text-secondary'}
              href="/?lang=en">ENGLISH</a>
          </Label>
        </Col>
        <Col 
          md={{ order:1, size: 4 }} xs={{ order:2, size: 12 }} 
          className="text-center my-4">
          <img src="https://files.sirclocdn.xyz/mavelin-demo/settings/_191224110812_mavelin logo demo.png" />
        </Col>
        <Col 
          md={{ order:2, size: 4 }} xs={{ order:1, size: 12 }} 
          className="d-flex justify-content-sm-end align-items-center my-4">
          <a className="text-dark mr-2" href="/?lang=id">Login / Register</a>
          <a className="text-dark" href="#">
            <Icon name="shopping bag" size='large' /> 0
          </a>
        </Col>
      </Row>
    </Container>
  );
};