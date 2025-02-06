import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabs: [
    { id: 3, name: 'Home', icon: 'icon-home', link: '/' },
    { id: 1, name: 'Hotel', icon: 'icon-bed', link: '/hotel/hotel1' },
    { id: 7, name: 'Flights', icon: 'icon-tickets', link: '/flight/flight1' },
    { id: 2, name: 'Visa', icon: 'icon-destination', link: '/visa' },
    {
      id: 4,
      name: 'Tour',
      icon: 'icon-location',
      link: '/package/tour-package',
    },
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
