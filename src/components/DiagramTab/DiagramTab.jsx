import { useMedia } from 'components/Media/useMedia';
import Chart from 'components/Chart/Chart';
import { Filter } from 'components/Filter/Filter';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';
import ExpensesData from 'components/ExpensesTable/ExpensesDtata/ExpensesData';
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
const { getStatistics } = transactionSelectors;

export function DiagramTab() {
  const { isMobile } = useMedia();
  const dataAr = useSelector(getStatistics);

  const display = isMobile ? 'block' : 'flex';

  return (
    <Box as="section" pt="28px" display={display} gap="32px">
      <Box mb="32px">
        <Text mb="8px" fontSize="30px" lineHeight="45px">
          Statistics
        </Text>
        <Chart dataArr={dataAr} />
      </Box>
      <Box width="100%">
        <Filter />
        <ExpensesTable>
          <ExpensesData />
        </ExpensesTable>
      </Box>
    </Box>
  );
}
