import axios from 'axios';

// axios.defaults.baseURL = 'https://api.monobank.ua';

export const getCurrency = async () => {
  const response = await axios.get(`https://api.monobank.ua/bank/currency`);

  return response.data;
};
