export const numberNormalize = num => {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace('-', '');
};
