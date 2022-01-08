import styled from 'styled-components';

const StyledImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;

  margin-right: 0.25rem;
`;

const ManaCost = ({ cost }) => {
  const fileName = `cost-${cost.toLowerCase()}.png`;
  const url = `/img/${fileName}`;

  return <StyledImg src={url} alt='' />;
};

export default ManaCost;
