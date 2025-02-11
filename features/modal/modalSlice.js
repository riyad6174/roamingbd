import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogin: false,
  showRegister: false,
  showOtp: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLogin: (state) => {
      state.showLogin = true;
      state.showRegister = false;
      state.showOtp = false;
    },
    openRegister: (state) => {
      state.showLogin = false;
      state.showRegister = true;
      state.showOtp = false;
    },
    openOtp: (state) => {
      state.showLogin = false;
      state.showRegister = false;
      state.showOtp = true;
    },
    closeModal: (state) => {
      state.showLogin = false;
      state.showRegister = false;
      state.showOtp = false;
    },
  },
});

export const { openLogin, openRegister, openOtp, closeModal } =
  modalSlice.actions;
export default modalSlice.reducer;
