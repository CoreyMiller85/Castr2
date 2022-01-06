import { createSlice } from '@reduxjs/toolkit';

export const colorFiltersSlice = createSlice({
  name: 'colorFilters',
  initialState: {
    colorFilter: [],
    rarityFilter: [],
    setFilter: '',
  },
  reducers: {
    setColorFilters: (state, action) => {
      state.colorFilter = action.payload;
    },
    setRarityFilters: (state, action) => {
      state.rarityFilter = action.payload;
    },
    setSetFilters: (state, action) => {
      state.setFilter = action.payload;
    },
  },
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectColorFilters = (state) => state.colorFilters.colorFilter;
export const selectRarityFilters = (state) => state.colorFilters.rarityFilter;
export const selectSetFilters = (state) => state.colorFilters.setFilter;

export const {
  setColorFilters,
  filterCardsByColor,
  setRarityFilters,
  setSetFilters,
} = colorFiltersSlice.actions;

export default colorFiltersSlice.reducer;
