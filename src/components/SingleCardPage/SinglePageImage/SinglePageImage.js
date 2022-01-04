import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Image = styled.img`
  width: 80%;
  border-radius: 4.75% / 3.5%;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 50%);
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const SinglePageImage = ({ imgSrc, alt }) => {
  let component = imgSrc ? (
    <Image src={imgSrc.png} alt={`card ${alt}`} />
  ) : (
    <h1>Card Not Found</h1>
  );

  return (
    <ImageContainer className='single-page-image'>{component}</ImageContainer>
  );
};

export default SinglePageImage;
