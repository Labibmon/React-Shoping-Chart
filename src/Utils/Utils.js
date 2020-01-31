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

export const womenProduct = {
  "products": [
    {
      "name": "Women Product 1",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/women-product-1.jpg"
    },
    {
      "name": "Women Product 2",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/women-product-2.jpg"
    },
    {
      "name": "Women Product 3",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/women-product-3.jpg"
    },
    {
      "name": "Women Product 4",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/women-product-4.jpg"
    },
    {
      "name": "Women Product 5",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/women-product-5.jpg"
    }
  ]
};

export const menProduct = {
  "products": [
    {
      "name": "Men Product 1",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/men-product-1.jpg"
    },
    {
      "name": "Men Product 2",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/men-product-2.jpg"
    },
    {
      "name": "Men Product 3",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/men-product-3.jpg"
    },
    {
      "name": "Men Product 4",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/men-product-4.jpg"
    },
    {
      "name": "Men Product 5",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/men-product-5.jpg"
    }
  ]
};

export const accesoriesProduct = {
  "products": [
    {
      "name": "Accessories 1",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/accessories-1.jpg"
    },
    {
      "name": "Accessories 2",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/accessories-2.jpg"
    },
    {
      "name": "Accessories 3",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/accessories-3.jpg"
    },
    {
      "name": "Accessories 4",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/accessories-4.jpg"
    },
    {
      "name": "Accessories 5",
      "image_file": "files.sirclocdn.xyz/frontend-test-37/images/accessories-5.jpg"
    }
  ]
};


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