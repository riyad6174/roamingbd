import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabs: [
    { id: 3, name: 'Home', icon: 'icon-home' },
    { id: 1, name: 'Hotel', icon: 'icon-bed' },
    { id: 7, name: 'Flights', icon: 'icon-tickets' },
    { id: 2, name: 'Visa', icon: 'icon-destination' },
    // { id: 4, name: "Holyday Rentals", icon: "icon-home" },
    // { id: 5, name: "Car", icon: "icon-car" },
    // { id: 6, name: "Cruise", icon: "icon-yatch" },
  ],
  currentTab: 'Home',
};

export const findPlaceSlice = createSlice({
  name: 'find-place',
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
