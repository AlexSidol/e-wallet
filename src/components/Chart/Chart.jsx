import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';
import { switchBgChart } from '../../helpers/switchColorStatistic';
import { useAuth } from '../../hooks/useAuth';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ dataArr }) => {
  const { balance } = useAuth();
  if (!dataArr) return;

  const { categoriesSummary } = dataArr;
  const dataName = categoriesSummary.map(({ name }) => name);
  const dataTotal = categoriesSummary.map(({ total }) => total);
  const colors = dataName.map(sum => switchBgChart(sum));

  const options = {
    cutout: '67%',
  };

  const initialData = {
    labels: ['No trasactions'],
    datasets: [
      {
        data: [1],
        backgroundColor: ['#a6a6a6'],
        borderColor: ['transparent'],
      },
    ],
  };
  const data = {
    labels: dataName,
    datasets: [
      {
        data: dataTotal,
        backgroundColor: colors,
        borderColor: ['transparent'],
      },
    ],
  };

  return (
    <Box height="288px" width="288px" position="relative" as="div">
      {categoriesSummary.length > 0 ? (
        <Doughnut redraw={true} options={options} data={data} />
      ) : (
        <Doughnut redraw={true} options={options} data={initialData} />
      )}
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize="18px"
        fontWeight="700"
      >
        &#8372; {balance}
      </Text>
    </Box>
  );
};

export default Chart;
