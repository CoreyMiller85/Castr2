import React from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import { useSelector } from 'react-redux';
import { selectSearchValue } from '../SearchInput/searchInputSlice';
import axios from 'axios';
import { setCardData } from '../CardContainer/CardContainerSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuButton from '../Menu/MenuButton/MenuButton';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #555;
  color: white;
  height: 80px;
  @media (min-width: 768px) {
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  const fetchCards = async (query) => {
    let results = await axios.get(
      `http://localhost:3002/api/cards/test?name=${query}`
    );
    dispatch(setCardData(results.data.docs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchCards(searchValue);
  };

  return (
    <HeaderContainer>
      <StyledLink to='/'>
        <Logo />
      </StyledLink>
      <SearchContainer handleSubmit={handleSubmit} />
      <MenuButton />
    </HeaderContainer>
  );
};

export default Header;
