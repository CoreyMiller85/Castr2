import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchValue, setSearchValue } from "./searchInputSlice";

const styles = {
	searchBar: {
		flex: "0 1 40%",
	},
};

const SearchInput = () => {
	const searchValue = useSelector(selectSearchValue);
	const dispatch = useDispatch();
	return (
		<>
			<input
				style={styles.searchBar}
				type="text"
				onChange={(e) => dispatch(setSearchValue(e.target.value))}
				value={searchValue}
			/>
		</>
	);
};

export default SearchInput;
