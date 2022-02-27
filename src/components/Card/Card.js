import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: transparent;
  width: 100%;
  margin: 0.5rem 0rem;
  border-radius: 4.75% / 3.5%;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  box-shadow: 1px 1px 10px rgb(0 0 0 / 50%);
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
      <StyledImg src={imageSrc.normal} alt='' />
    </StyledCard>
  );
};

export default Card;
