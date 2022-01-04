import styled from 'styled-components';
import { useState } from 'react';

const StyledTitle = styled.h1`
  display: block;
  visiblity: visible;
  @media (min-width: 768px) {
    display: none;
    visiblity: none;
  }
`;

const MenuButton = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return <StyledTitle onClick={() => console.log('clicked')}>Menu</StyledTitle>;
};

export default MenuButton;
