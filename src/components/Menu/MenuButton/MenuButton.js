import styled from 'styled-components';
import Menu from '../Menu';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  selectFilterMenuOpen,
  setFilterMenuOpen,
} from '../../FilterContainer/FilterContainerSlice';

const StyledTitle = styled.h1`
  display: block;
  position: relative;
  visiblity: visible;
  @media (min-width: 768px) {
  }
`;

const MenuButton = () => {
  const filterMenuOpen = useSelector(selectFilterMenuOpen);
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    const status = filterMenuOpen;
    dispatch(setFilterMenuOpen(!status));
  };
  return (
    <>
      <StyledTitle onClick={handleMenuToggle}>Filters</StyledTitle>
    </>
  );
};

export default MenuButton;
