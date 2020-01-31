import React, { Fragment, useState } from 'react';
import { RoutersLink } from '../Utils/Utils';
import {
  Link,
} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Container, Nav, NavItem } from 'reactstrap';
import { Icon } from 'semantic-ui-react';


export const NavbarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
 
  return(
    <Fragment>
      <Navbar expand="lg" color="light" light>
        <Container>
          <NavbarToggler onClick={()=>setCollapsed(!collapsed)} className="mr-2" />
          
          <Collapse
            className="justify-content-end"
            isOpen={collapsed}
            navbar
          >
            <Nav className="mx-auto position-relative" navbar>
              {RoutersLink.map((data,index)=>{
                return <NavItem className="my-3" key={index}>
                  <Link to={data.link} 
                    className="text-dark mx-3 text-uppercase"
                    onClick={()=>setCollapsed(false)}
                  >{data.header}</Link>
                </NavItem>;
              })}
            </Nav>
            <Icon name="search" />
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};