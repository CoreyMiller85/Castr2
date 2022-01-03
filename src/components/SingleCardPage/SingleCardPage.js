import React from 'react';
import { useSelector } from 'react-redux';
import { selectSingleCardData } from '../CardContainer/CardContainerSlice';
import SinglePageImage from './SinglePageImage/SinglePageImage';
import styled from 'styled-components';

const StyledSingleCardPage = styled.div`
  background: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

const SingleCardPage = () => {
  const singleCardData = useSelector(selectSingleCardData);
  return (
    <StyledSingleCardPage>
      <SinglePageImage
        imgSrc={singleCardData.image_uris}
        alt={singleCardData.name}
      />
      <div style={{ background: 'white ', width: '90%' }}>
        <h2>{singleCardData.name}</h2>
        <p>{singleCardData.mana_cost}</p>
        <p>{singleCardData.oracle_text}</p>
      </div>
    </StyledSingleCardPage>
  );
};

export default SingleCardPage;
