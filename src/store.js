import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './components/SearchInput/searchInputSlice';
import cardsReducer from './components/CardContainer/CardContainerSlice';
import colorFiltersReducer from './components/FilterContainer/FilterContainerSlice';
export default configureStore({
  reducer: {
    inputValue: searchReducer,
    cards: cardsReducer,
    colorFilters: colorFiltersReducer,
  },
});
