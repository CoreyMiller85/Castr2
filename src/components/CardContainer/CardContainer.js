import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCardData,
  selectCards,
  selectFilteredCards,
  setFilteredCards,
} from './CardContainerSlice';
import { selectColorFilters } from '../FilterContainer/FilterContainerSlice';
import Card from '../Card/Card';
import axios from 'axios';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  background: linear-gradient(to bottom, #333, #555);
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
`;

const CardContainer = () => {
  const cards = useSelector(selectCards);
  const colorFilter = useSelector(selectColorFilters);
  const filteredCards = useSelector(selectFilteredCards);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCards();
  }, []); // eslint-disable-line

  const fetchCards = async () => {
    let results = await axios.get(
      `http://localhost:3002/api/cards/test?legalities=${'standard'}`
    );
    dispatch(setCardData(results.data.docs));
  };

  const compareColors = (filters, cardColors) => {
    return filters.every((filter) => cardColors.includes(filter));
  };

  const filterData = (colorFilter) => {
    if (colorFilter.length > 0) {
      const newArray = [];
      cards.forEach((card) => {
        if (compareColors(colorFilter, card.colors)) {
          newArray.push(card);
        }
      });
      dispatch(setFilteredCards(newArray));
    } else {
      return cards;
    }
  };

  let cardsList;
  if (cards.length > 0) {
    cardsList = cards.map((card) => {
      if (card.card_faces.length > 0) {
        // SHOWS FRONT OF CARD IF DOUBLE SIDED
        return (
          <Card
            key={card.id}
            imageSrc={card.card_faces[0].image_uris.normal}
            data={card}
          />
        );
      } else {
        return (
          <Card key={card.id} imageSrc={card.image_uris.normal} data={card} />
        );
      }
    });
  } else {
    cardsList = 'Loading...';
  }

  const filteredCardsList = filteredCards.map((card) => {
    if (card.card_faces.length > 0) {
      // SHOWS FRONT OF CARD IF DOUBLE SIDED
      return (
        <Card key={card.id} imageSrc={card.card_faces[0].image_uris.normal} />
      );
    } else {
      return <Card key={card.id} imageSrc={card.image_uris.normal} />;
    }
  });

  return (
    <StyledCardContainer>
      {filteredCards.length > 0 ? filteredCardsList : cardsList}
    </StyledCardContainer>
  );
};

export default CardContainer;
