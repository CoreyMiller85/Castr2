import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setCardData,
	selectCards,
	selectFilteredCards,
	setFilteredCards,
} from "./CardContainerSlice";
import { selectColorFilters } from "../FilterContainer/FilterContainerSlice";

import axios from "axios";

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
			`http://localhost:3002/api/cards/test?legalities=${"standard"}`
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
			// const newCards = cards.filter((c) => {
			// 	const colorArray = [...c.colors];
			// 	const cardColorString = colorArray.sort().join("");
			// 	console.log(cardColorString);
			// });
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
					<div key={card.id}>
						<img src={card.card_faces[0].image_uris.normal} alt="" />
					</div>
				);
			} else {
				return (
					<div key={card.id}>
						<img src={card.image_uris.normal} alt="" />
					</div>
				);
			}
		});
	} else {
		cardsList = "Loading...";
	}

	const filteredCardsList = filteredCards.map((card) => {
		if (card.card_faces.length > 0) {
			// SHOWS FRONT OF CARD IF DOUBLE SIDED
			return (
				<div key={card.id}>
					<img src={card.card_faces[0].image_uris.normal} alt="" />
				</div>
			);
		} else {
			return (
				<div key={card.id}>
					<img src={card.image_uris.normal} alt="" />
				</div>
			);
		}
	});

	const testFunction = () => {
		filterData(colorFilter);
	};

	return (
		<div>
			<button onClick={testFunction}>filter cards</button>
			{filteredCards.length > 0 ? filteredCardsList : cardsList}
		</div>
	);
};

export default CardContainer;
