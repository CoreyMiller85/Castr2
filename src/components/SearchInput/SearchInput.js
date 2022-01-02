import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchValue, setSearchValue } from './searchInputSlice';
import styled from 'styled-components';

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 10px 35px 10px 15px;
  border: none;
  border-radius: 100px;
  outline: none;
`;

const SearchInput = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();
  return (
    <StyledSearchInput
      type='text'
      placeholder='Search...'
      onChange={(e) => dispatch(setSearchValue(e.target.value))}
      value={searchValue}
    />
  );
};

export default SearchInput;
