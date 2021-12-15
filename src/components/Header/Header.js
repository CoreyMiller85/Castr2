import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../SearchInput/searchInputSlice";
import axios from "axios";
import FilterContainer from "../FilterContainer/FilterContainer";
import { setCardData } from "../CardContainer/CardContainerSlice";
import { useDispatch } from "react-redux";
const styles = {
	header: {
		display: "flex",
		justifyContent: "space-between",
		height: "70px",
		background: "beige",
	},
	logo: {},
};

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
		<div className="header" style={styles.header}>
			<h1>CASTR</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<SearchInput />
				<SubmitButton handleSubmit={handleSubmit} />
			</form>
			<FilterContainer />
			<div>Filters</div>
			<div>Hamburger menu</div>
		</div>
	);
};

export default Header;
