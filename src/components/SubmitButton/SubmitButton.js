import React from 'react';
import styled from 'styled-components';
import SearchImg from '../../img/search.png';

const StyledButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: -33px;
`;

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const SubmitButton = ({ handleSubmit }) => {
  return (
    <>
      <StyledButton type='submit' onSubmit={(e) => handleSubmit(e)}>
        <StyledImage src={SearchImg} alt='Magnifying Glass' />
      </StyledButton>
    </>
  );
};

export default SubmitButton;
