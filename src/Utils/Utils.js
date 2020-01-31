import React from 'react';
import {
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import Home from '../pages/Home';

export const RoutersLink = [{
  header: 'New Arrival',
  link: '/'
},{
  header: 'Women',
  link: '/women'
},{
  header: 'Men',
  link: '/men'
},{
  header: 'Accesories',
  link: '/accesories'
},{
  header: 'Sale',
  link: '/sale'
},{
  header: 'Blog',
  link: '/blog'
},{
  header: 'Contact',
  link: '/contact'
},{
  header: 'Lookbook',
  link: '/lookbook'
}];

export const RouteSwitch = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}