import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMedia } from 'components/Media/useMedia';
import { getSumTransactions } from 'redux/transaction/transactionOperations';
import { Select, Stack } from '@chakra-ui/react';
import time from 'service/date';

const { years, months, date } = time;

export const Filter = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSumTransactions({
        month: month + 1,
        year,
      })
    );
  }, [dispatch, month, year]);

  const handleChange = event => {
    if (event.target.id === 'month') setMonth(parseInt(event.target.value));
    if (event.target.id === 'year') setYear(parseInt(event.target.value));
  };

  let spacing = '';
  let direction = [];

  if (isMobile) {
    spacing = '20px';
    direction = ['column'];
  }

  if (isTablet) {
    spacing = '16px';
    direction = ['row'];
  }

  if (isDesktop) {
    spacing = '32px';
    direction = ['row'];
  }

  return (
    <Stack direction={direction} spacing={spacing} pb="20px">
      <Select
        id="month"
        variant="outline"
        border="1px solid #000000"
        borderRadius="30px"
        bgColor="#FFFFFF"
        onChange={handleChange}
        defaultValue={month}
      >
        {months.map((item, index) => {
          return (
            <option key={index} value={item.num}>
              {item.name}
            </option>
          );
        })}
      </Select>
      <Select
        id="year"
        variant="outline"
        border="1px solid #000000"
        borderRadius="30px"
        bgColor="#FFFFFF"
        onChange={handleChange}
      >
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </Stack>
  );
};
