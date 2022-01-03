import React from 'react';
import { useSelector } from 'react-redux';
import { selectSingleCardData } from '../CardContainer/CardContainerSlice';

const SingleCardPage = () => {
  const singleCardData = useSelector(selectSingleCardData);
  return (
    <div>
      <h1>{singleCardData.name}</h1>
    </div>
  );
};

export default SingleCardPage;
