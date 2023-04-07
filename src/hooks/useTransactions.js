import { useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';

export const useTransactions = () => {
  const transactions = useSelector(transactionSelectors.getTransactions);
  const categories = useSelector(transactionSelectors.getCategories);
  const statistics = useSelector(transactionSelectors.getStatistics);
  const loadingTransactions = useSelector(transactionSelectors.getLoading);
  const errorTransactions = useSelector(transactionSelectors.getError);
  const oneTransaction = useSelector(transactionSelectors.getOneTransaction);
  return {
    transactions,
    categories,
    statistics,
    loadingTransactions,
    errorTransactions,
    oneTransaction,
  };
};

// for example: const { transactions} = useTransactions();
// you will have const transactions = state.transactions.allTransactions;
