import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColorFilters, selectColorFilters } from "./FilterContainerSlice";

const FilterContainer = () => {
	const colorFilter = useSelector(selectColorFilters);
	const dispatch = useDispatch();

	const handleFilter = (color) => {
		if (colorFilter.includes(color)) {
			const newArray = colorFilter.filter((c) => c !== color);
			dispatch(setColorFilters(newArray));
		} else {
			dispatch(setColorFilters([...colorFilter, color]));
		}
	};

	return (
		<div>
			<button onClick={() => handleFilter("W")}>White</button>
			<button onClick={() => handleFilter("B")}>Black</button>
			<button onClick={() => handleFilter("U")}>Blue</button>
			<button onClick={() => handleFilter("R")}>Red</button>
			<button onClick={() => handleFilter("G")}>Green</button>
		</div>
	);
};

export default FilterContainer;
