import styled from 'styled-components';
import Menu from '../Menu';
import { useState } from 'react';
import Test from '../../Test';
const StyledTitle = styled.h1`
  display: block;
  position: relative;
  visiblity: visible;
  @media (min-width: 768px) {
    display: none;
    visiblity: none;
  }
`;

const MenuButton = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      {menuToggle ? (
        <Test />
      ) : (
        <StyledTitle onClick={() => setMenuToggle(!menuToggle)}>
          Menu
        </StyledTitle>
      )}
    </>
  );
};

export default MenuButton;
