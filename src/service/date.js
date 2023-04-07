function generateArrayOfYears() {
  const max = new Date().getFullYear();
  const min = max - 9;
  const years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

const years = generateArrayOfYears();

const months = [
  { num: 0, name: 'January' },
  { num: 1, name: 'February' },
  { num: 2, name: 'March' },
  { num: 3, name: 'April' },
  { num: 4, name: 'May' },
  { num: 5, name: 'June' },
  { num: 6, name: 'July' },
  { num: 7, name: 'August' },
  { num: 8, name: 'September' },
  { num: 9, name: 'October' },
  { num: 10, name: 'November' },
  { num: 11, name: 'December' },
];
const date = new Date();

const time = {
  years,
  months,
  date,
};

export default time;
