import styled from 'styled-components';
import ManaCost from '../ManaCost/ManaCost';
import ReactHtmlParser from 'react-html-parser';

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
  margin: 0;
  border-bottom: 1px solid black;
`;

const StyledP = styled.p`
  padding: 0.25rem 0.5rem;
  margin: 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
`;

const StyledMana = styled.div`
  padding: 0.25rem 0.5rem;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;

  border-bottom: 1px solid black;
`;

const SingleCardPageDetails = ({
  name,
  mana_cost,
  oracle_text,
  power,
  toughness,
  flavor_text,
}) => {
  function ParsedText(text) {
    const oldText = text.split('');

    const newText = oldText.filter((elem) => {
      if (elem == '{' || elem == '}') {
        return false;
      }
      return true;
    });
    return newText;
  }

  const thing = mana_cost
    ? ParsedText(mana_cost).map((elem) => {
        return <ManaCost cost={elem} />;
      })
    : null;

  const regex = new RegExp('{.?.?}', 'gi');

  const newOracleText = oracle_text
    ? oracle_text.replace(regex, (elem) => {
        const array = elem.split('');
        const filteredArray = array.filter((e) => e !== '{' && e !== '}');
        const completed = filteredArray.join('');
        return `<img class='mana-symbol' style='width: 16px; height: 16px; display: inline-block; ' src='/img/cost-${completed}.png' />`;
      })
    : null;
  const parsedOracleText = ReactHtmlParser(newOracleText);
  // const fileName = `cost-${completed.toLowerCase()}.png`;
  //   const url = `/img/${fileName}`;
  return (
    <StyledContainer>
      <StyledH2>{name}</StyledH2>
      <StyledMana>{thing}</StyledMana>{' '}
      {/* /({.?})/ regex code to replace with Mana Symbol  */}
      <StyledP>{parsedOracleText}</StyledP>
      <StyledP>{flavor_text ? flavor_text : null}</StyledP>
      {power && toughness ? (
        <StyledP>
          {power} / {toughness}
        </StyledP>
      ) : null}
    </StyledContainer>
  );
};

export default SingleCardPageDetails;
