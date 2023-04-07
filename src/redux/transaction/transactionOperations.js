import { createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionAPI from '../../service/transactionApi';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await transactionAPI.getAllTransactions();
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await transactionAPI.postAddTransaction(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      await transactionAPI.deleteTransaction(transaction.id);
      return transaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await transactionAPI.updateTransaction(transaction);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await transactionAPI.getTransactionCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSumTransactions = createAsyncThunk(
  'transactions/getSumTransactions',
  async (query, { rejectWithValue }) => {
    try {
      const sum = await transactionAPI.getTransactionsSum(query);
      return sum;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  getSumTransactions,
};
export default operations;
