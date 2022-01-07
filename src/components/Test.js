import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const Test = () => {
  return (
    <SlideDown className={'my-dropdown-slidedown'}>
      <div>
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
      </div>
    </SlideDown>
  );
};

export default Test;
