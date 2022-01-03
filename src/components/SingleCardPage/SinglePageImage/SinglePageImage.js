import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  border-radius: 4.75% / 3.5%;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 50%);
`;

const SinglePageImage = ({ imgSrc, alt }) => {
  let component = imgSrc.png ? (
    <Image src={imgSrc.png} alt={`card ${alt}`} />
  ) : (
    <p>Loading...</p>
  );

  return (
    <ImageContainer className='single-page-image'>{component}</ImageContainer>
  );
};

export default SinglePageImage;
