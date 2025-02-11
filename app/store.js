import { configureStore } from '@reduxjs/toolkit';
import findPlaceSlice from '../features/hero/findPlaceSlice';
import modalReducer from '../features/modal/modalSlice'; // Import modal slice

export const store = configureStore({
  reducer: {
    hero: findPlaceSlice,
    modal: modalReducer, // Add modal reducer
  },
});
