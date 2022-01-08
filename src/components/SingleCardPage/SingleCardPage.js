import React from 'react';
import { useSelector } from 'react-redux';
import { selectSingleCardData } from '../CardContainer/CardContainerSlice';
import SinglePageImage from './SinglePageImage/SinglePageImage';
import SingleCardPageDetails from './SingleCardPageDetails/SingleCardPageDetails';
import styled from 'styled-components';

const StyledSingleCardPage = styled.div`
  background: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    padding: 2rem;
  }
`;

const SingleCardPage = () => {
  const singleCardData = useSelector(selectSingleCardData);
  return (
    <StyledSingleCardPage>
      <SinglePageImage
        imgSrc={singleCardData.image_uris}
        alt={singleCardData.name}
      />

      <SingleCardPageDetails
        mana_cost={singleCardData.mana_cost}
        name={singleCardData.name}
        oracle_text={singleCardData.oracle_text}
        power={singleCardData.power}
        toughness={singleCardData.toughness}
        flavor_text={singleCardData.flavor_text}
      />
    </StyledSingleCardPage>
  );
};

export default SingleCardPage;
