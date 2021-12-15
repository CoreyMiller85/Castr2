import { createSlice } from "@reduxjs/toolkit";

export const searchInputSlice = createSlice({
	name: "searchInput",
	initialState: {
		value: "",
	},
	reducers: {
		setSearchValue: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const selectSearchValue = (state) => state.inputValue.value;

export const { setSearchValue } = searchInputSlice.actions;
export default searchInputSlice.reducer;
