const getTransactions = state => state.transactions.allTransactions;

const getCategories = state => state.transactions.categories;

const getStatistics = state => state.transactions.statistics;

const getError = state => state.transactions.error;

const getLoading = state => state.transactions.isLoading;

const getOneTransaction = state => state.transactions.transaction;

const transactionSelectors = {
  getTransactions,
  getCategories,
  getStatistics,
  getError,
  getLoading,
  getOneTransaction,
};

export default transactionSelectors;
