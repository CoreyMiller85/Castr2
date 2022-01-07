import SearchContainer from '../SearchContainer/SearchContainer';
import { useSelector } from 'react-redux';
import { selectSearchValue } from '../SearchInput/searchInputSlice';
import axios from 'axios';
import { setCardData } from '../CardContainer/CardContainerSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import MenuButton from '../Menu/MenuButton/MenuButton';
import { selectFilterMenuOpen } from '../FilterContainer/FilterContainerSlice';
import Menu from '../Menu/Menu';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  background: #555;
  color: white;
  @media (min-width: 768px) {
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const BottomRow = styled.div`
  display: flex;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const filterMenuOpen = useSelector(selectFilterMenuOpen);

  const fetchCards = async (query) => {
    let results = await axios.get(
      `http://localhost:3002/api/cards/test?${query}`
    );
    dispatch(setCardData(results.data.docs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCards(`name=${searchValue}`);
  };

  return (
    <HeaderContainer>
      <TopRow>
        <StyledLink to='/'>
          <Logo />
        </StyledLink>
        <SearchContainer handleSubmit={handleSubmit} />
        <MenuButton />
      </TopRow>
      {filterMenuOpen ? (
        <SlideDown className={'my-dropdown-slidedown'}>
          <Menu />
        </SlideDown>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
