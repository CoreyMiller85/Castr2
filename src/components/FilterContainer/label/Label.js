import React from 'react';

const Label = ({ name, title }) => {
  return <label htmlFor={name}>{title} </label>;
};

export default Label;
