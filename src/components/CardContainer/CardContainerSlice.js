import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    value: [],
    filteredCards: [],
    singleCardData: {},
    loading: false,
  },
  reducers: {
    setCardData: (state, action) => {
      state.value = action.payload;
    },
    setFilteredCards: (state, action) => {
      state.filteredCards = action.payload;
    },
    setSingleCardData: (state, action) => {
      state.singleCardData = action.payload;
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
export const selectCards = (state) => state.cards.value;
export const selectFilteredCards = (state) => state.cards.filteredCards;
export const selectSingleCardData = (state) => state.cards.singleCardData;

export const { setCardData, setFilteredCards, setSingleCardData } =
  cardsSlice.actions;

export default cardsSlice.reducer;
