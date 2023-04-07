import { useMedia } from 'components/Media/useMedia';
import { TransactionsCards } from './TransactionsCards/TransactionsCards';
import { TransactionsTable } from './TransactionsTable/TransactionsTable';

export const Transactions = function ({ dataArr }) {
  const { isMobile } = useMedia();
  return (
    <>
      {isMobile ? (
        <TransactionsCards dataArr={dataArr} />
      ) : (
        <TransactionsTable dataArr={dataArr} />
      )}
    </>
  );
};
