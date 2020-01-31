import React from 'react';
import { NavbarComponent } from './component/NavbarComponent';
import {
  BrowserRouter as Router,
  // Route,
  // Link,
  // Switch,
  // Redirect,
  // useLocation
} from "react-router-dom";
import { RouteSwitch } from './Utils/Utils';
import { HeaderComponent } from './component/HeaderComponent';
import { FooterComponent } from './component/FooterComponent';

export const App = () => {
  return(
    <Router>
      <NavbarComponent />
      <HeaderComponent />
      <RouteSwitch />
      <FooterComponent />
    </Router>
  );
};