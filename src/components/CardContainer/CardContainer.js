import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCardData,
  selectCards,
  selectFilteredCards,
  setFilteredCards,
  selectSingleCardData,
  setSingleCardData,
  setLoadMore,
} from './CardContainerSlice';
import { selectColorFilters } from '../FilterContainer/FilterContainerSlice';
import Card from '../Card/Card';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const StyledCardContainer = styled.div`
  background: linear-gradient(to bottom, #333, #555);
  padding: 1rem 0.5rem;
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

const CardContainer = ({ skip }) => {
  const cards = useSelector(selectCards);
  const colorFilter = useSelector(selectColorFilters);
  const filteredCards = useSelector(selectFilteredCards);
  const singleCardData = useSelector(selectSingleCardData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [queryString, setQueryString] = useState('legalities=standard');
  const [queryInfo, setQueryInfo] = useState({});

  useEffect(() => {
    fetchCards(`${queryString}&page=${page} `);
    console.log(queryInfo);
  }, []); // eslint-disable-line

  const fetchCards = async (queryString) => {
    setLoading(true);
    let results = await axios.get(
      `http://localhost:3002/api/cards/test?${queryString}`
    );
    setQueryInfo(results.data);
    dispatch(setCardData(results.data.docs));

    setLoading(false);
  };

  const loadMore = async () => {
    setPage(page + 1);
    fetchCards(`${queryString}&page=${page}`);
  };

  const getCardById = async (id) => {
    axios
      .get(`http://localhost:3002/api/cards/singlecard/${id}`)
      .then((response) => dispatch(setSingleCardData(response.data)));
    navigate('/singleCard');
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
  // Check to See if cards is populated, if it is, check if card is doublesided, if true, display front of card.
  if (cards.length > 0) {
    cardsList = cards.map((card) => {
      if (card.card_faces.length > 0) {
        // SHOWS FRONT OF CARD IF DOUBLE SIDED
        return (
          <Card
            key={card.id}
            imageSrc={card.card_faces[0].image_uris}
            data={card}
            getCardById={getCardById}
          />
        );
      } else {
        return (
          <Card
            key={card.id}
            imageSrc={card.image_uris}
            data={card}
            getCardById={getCardById}
          />
        );
      }
    });
  }

  // If filters are active, filter current cards
  const filteredCardsList = filteredCards.map((card) => {
    if (card.card_faces.length > 0) {
      // SHOWS FRONT OF CARD IF DOUBLE SIDED
      return (
        <Card
          key={card.id}
          getCardById={getCardById}
          imageSrc={card.card_faces[0].image_uris}
        />
      );
    } else {
      return (
        <Card
          key={card.id}
          getCardById={getCardById}
          imageSrc={card.image_uris}
        />
      );
    }
  });

  return (
    <StyledCardContainer>
      {loading && <h1>Loading...</h1>}
      {filteredCards.length > 0 ? filteredCardsList : cardsList}
      {queryInfo.hasNext && <button onClick={loadMore}>Load More</button>}
    </StyledCardContainer>
  );
};

export default CardContainer;
