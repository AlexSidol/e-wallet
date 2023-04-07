export const switchBgChart = name => {
  switch (name) {
    case 'Main expenses':
      return '#FED057';
    case 'Products':
      return '#FFD8D0';
    case 'Car':
      return '#FD9498';
    case 'Self care':
      return '#C5BAFF';
    case 'Child care':
      return '#6E78E8';
    case 'Household products':
      return '#4A56E2';
    case 'Education':
      return '#81E1FF';
    case 'Leisure':
      return '#24CCA7';
    default:
      return '#00AD84';
  }
};

export const switchBgStatistic = ({ name, theme: { colors } }) => {
  switch (name) {
    case 'Main expenses':
      return colors.expenses;
    case 'Products':
      return colors.products;
    case 'Car':
      return colors.car;
    case 'Self care':
      return colors.care;
    case 'Child care':
      return colors.child;
    case 'Household products':
      return colors.household;
    case 'Education':
      return colors.education;
    case 'Leisure':
      return colors.leisure;
    case 'Other expenses':
      return colors.other;
    default:
      return colors.grey;
  }
};
