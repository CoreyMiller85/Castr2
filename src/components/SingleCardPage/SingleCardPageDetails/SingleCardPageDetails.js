import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 1rem 0 0 0;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  width: 90%;
  border: 1px solid black;
  @media (min-width: 768px) {
    margin: 0;
    align-self: flex-end;
  }
`;

const StyledH2 = styled.h2`
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid black;
`;

const StyledP = styled.p`
  padding: 0.25rem 0.5rem;

  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
`;

const SingleCardPageDetails = ({
  name,
  mana_cost,
  oracle_text,
  power,
  toughness,
}) => {
  return (
    <StyledContainer>
      <StyledH2>{name}</StyledH2>
      <StyledP>Mana Cost: {mana_cost}</StyledP>
      <StyledP>{oracle_text}</StyledP>
      {power && toughness ? (
        <StyledP>
          {power} / {toughness}
        </StyledP>
      ) : null}
    </StyledContainer>
  );
};

export default SingleCardPageDetails;
