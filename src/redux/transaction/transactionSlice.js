import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import transactionOperations from './transactionOperations';

const {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  getSumTransactions,
} = transactionOperations;

function pending(state) {
  state.isLoading = true;
}

function rejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

function fulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

const extraActions = [
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  getSumTransactions,
];
const getActions = type => extraActions.map(action => action[type]);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    allTransactions: [],
    categories: [],
    statistics: null,
    isLoading: false,
    error: null,
    transaction: null,
  },
  reducers: {
    EditTransaction(state, { payload }) {
      state.transaction = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.allTransactions.push(payload);
      })
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.allTransactions = payload;
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        state.allTransactions = state.allTransactions.map(transaction => {
          return (transaction =
            transaction.id === payload.id ? payload : transaction);
        });
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.allTransactions = state.allTransactions.filter(
          transaction => transaction.id !== payload.id
        );
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(getSumTransactions.fulfilled, (state, { payload }) => {
        state.statistics = payload;
      })
      .addMatcher(isAnyOf(...getActions('pending')), pending)
      .addMatcher(isAnyOf(...getActions('rejected')), rejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilled);
  },
});

export const { EditTransaction } = transactionSlice.actions;
export const transactionReducer = transactionSlice.reducer;
