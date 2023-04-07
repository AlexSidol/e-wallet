import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import OpenModalTransitionBtn from 'components/OpenModalTransitionBtn/OpenModalTransitionBtn';
import { Transactions } from 'components/TransactionsTable/Transactions';
import { useMedia } from 'components/Media/useMedia';
import { useModals } from 'hooks/useModal';
import Balance from 'components/Balance/Balance';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchCategories,
  fetchTransactions,
} from 'redux/transaction/transactionOperations';
import { useTransactions } from 'hooks/useTransactions';
import ModalUpdateTransaction from 'components/ModalUpdateTransaction/ModalUpdateTransaction';

const HomePage = () => {
  // запрос на получение всех транзакций
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  // получение массива транзакций со стейта
  const { transactions, categories } = useTransactions();

  // Добавление наименования транзакции в новый массив транзакций
  let newTransactions;
  const toChangeTransaction = (transactions, categories) => {
    newTransactions = [];
    for (let i = 0; i < transactions.length; i += 1) {
      for (let j = 0; j < categories.length; j += 1) {
        if (categories[j].id === transactions[i].categoryId) {
          newTransactions[i] = {
            ...transactions[i],
            category: categories[j].name,
          };
        }
      }
      newTransactions[i].type =
        newTransactions[i].type === 'INCOME' ? '+' : '-';
      newTransactions[i].transactionDate = newTransactions[i].transactionDate
        .split('-')
        .reverse()
        .join('.');
    }
  };

  if (transactions.length && categories.length) {
    toChangeTransaction(transactions, categories);
  }
  const { isMobile } = useMedia();
  const { isModalAdd, isModalLogout, isModalUpdate } = useModals();
  return (
    <>
      {isModalAdd && <ModalAddTransaction />}
      {isModalLogout && <ModalLogout />}
      {isModalUpdate && <ModalUpdateTransaction />}
      {isMobile && <Balance />}
      {newTransactions && <Transactions dataArr={newTransactions} />}
      <OpenModalTransitionBtn />
    </>
  );
};
export default HomePage;
