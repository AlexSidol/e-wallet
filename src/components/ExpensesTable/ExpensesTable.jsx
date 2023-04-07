import { useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
import {
  Table,
  Category,
  Sum,
  CatTotal,
  ExpTotal,
  IncTotal,
} from './ExpensesTable.styled';

const ExpensesTable = ({ children }) => {
  const { getStatistics } = transactionSelectors;
  const statistics = useSelector(getStatistics);

  if (!statistics) {
    return;
  }

  const { incomeSummary = 0, expenseSummary = 0 } = statistics;

  return (
    <Table>
      <thead>
        <tr>
          <Category>Category</Category>
          <Sum>Sum</Sum>
        </tr>
      </thead>
      <tbody>{children}</tbody>
      <tfoot>
        <tr>
          <CatTotal>Expenses:</CatTotal>
          <ExpTotal>{expenseSummary}</ExpTotal>
        </tr>
        <tr>
          <CatTotal>Income:</CatTotal>
          <IncTotal>{incomeSummary}</IncTotal>
        </tr>
      </tfoot>
    </Table>
  );
};

export default ExpensesTable;
