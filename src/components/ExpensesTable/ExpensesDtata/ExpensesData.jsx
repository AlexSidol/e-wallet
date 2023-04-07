import { useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
import { theme } from 'styles/theme';
import { switchBgStatistic } from 'helpers/switchColorStatistic';
import { Data, CatData, SumData } from './ExpensesData.styled';
import { ImStop2 } from 'react-icons/im';

const ExpensesData = () => {
  const statistics = useSelector(transactionSelectors.getStatistics);
  const { categoriesSummary } = statistics;
  const filteredCategories = categoriesSummary.filter(
    item => item.type !== 'INCOME'
  );

  if (filteredCategories.length) {
    return filteredCategories.map(category => {
      const { name, total } = category;

      const color = switchBgStatistic({ name, theme });

      return (
        <Data key={name}>
          <CatData>
            <ImStop2 color={color} size="24px" title="colored box" />
            {name}
          </CatData>
          <SumData>{total}</SumData>
        </Data>
      );
    });
  }
};

export default ExpensesData;
