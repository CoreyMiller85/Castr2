import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: transparent;

  @media (min-width: 768px) {
  }
`;

const StyledImg = styled.img`
  border-radius: 20px;
  @media (min-width: 768px) {
  }
`;

const Card = ({ imageSrc, data, getCardById }) => {
  return (
    <StyledCard className='card' onClick={() => getCardById(data.id)}>
      <StyledImg src={imageSrc} alt='' />
    </StyledCard>
  );
};

export default Card;
