import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
`;

const SearchContainer = ({ handleSubmit }) => {
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <SearchInput />
      <SubmitButton handleSubmit={handleSubmit} />
    </StyledForm>
  );
};

export default SearchContainer;
