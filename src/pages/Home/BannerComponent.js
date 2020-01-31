import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

export const BannerComponent = () => {
  const items = [
    {
      src: 'https://files.sirclocdn.xyz/frontend-test-37/images/this-month-banner-slider.jpg',
      altText: 'Slide 1',
      caption: '',
      header: '',
      key: '1'
    },
    {
      src: 'https://files.sirclocdn.xyz/frontend-test-37/images/this-month-banner-slider.jpg',
      altText: 'Slide 2',
      caption: '',
      header: '',
      key: '2'
    }
  ];
  return(
    <UncontrolledCarousel items={items} />
  );
};