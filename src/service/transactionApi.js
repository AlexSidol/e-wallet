import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export async function getAllTransactions() {
  const { data } = await axios.get('/transactions');
  return data;
}

export async function postAddTransaction(newTransaction) {
  const { data } = await axios.post('/transactions', newTransaction);
  return data;
}

export async function updateTransaction({
  id,
  transactionDate,
  type,
  categoryId,
  comment,
  amount,
  balanceAfter,
}) {
  const { data } = await axios.patch(`/transactions/${id}`, {
    transactionDate,
    type,
    categoryId,
    comment,
    amount,
  });

  data.amount = amount;
  data.balanceAfter = balanceAfter;
  return data;
}

export async function deleteTransaction(transactionId) {
  const data = await axios.delete(`/transactions/${transactionId}`);
  console.log(data);
  return data;
}

export async function getTransactionCategories() {
  const { data } = await axios.get('/transaction-categories');
  return data;
}

export async function getTransactionsSum(query) {
  const { data } = await axios.get('/transactions-summary', {
    params: { month: query.month, year: query.year },
  });
  return data;
}
