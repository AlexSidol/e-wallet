import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalAddTransaction: false,
    modalLogout: false,
    modalUpdateTransaction: false,
  },
  reducers: {
    isModalAddTransaction(state, { payload }) {
      state.modalAddTransaction = payload;
    },
    isModalUpdateTransaction(state, { payload }) {
      state.modalUpdateTransaction = payload;
    },
    isModalLogout(state, { payload }) {
      state.modalLogout = payload;
    },
  },
});

export const {
  isModalAddTransaction,
  isModalLogout,
  isModalUpdateTransaction,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
