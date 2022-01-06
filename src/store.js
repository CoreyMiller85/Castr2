import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './components/SearchInput/searchInputSlice';
import cardsReducer from './components/CardContainer/CardContainerSlice';
import colorFiltersReducer from './components/FilterContainer/FilterContainerSlice';
import { mtgApiSlice } from './API/CardDatabase';
export default configureStore({
  reducer: {
    inputValue: searchReducer,
    cards: cardsReducer,
    colorFilters: colorFiltersReducer,
    [mtgApiSlice.reducerPath]: mtgApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mtgApiSlice.middleware),
});
