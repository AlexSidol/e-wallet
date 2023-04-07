import axios from 'axios';

export async function postRegister(credentials) {
  console.log(credentials);
  const { data } = await axios.post('/auth/sign-up', credentials);
  return data;
}

export async function postLogin(credentials) {
  const { data } = await axios.post('/auth/sign-in', credentials);

  return data;
}

export async function deleteLogOut() {
  const data = await axios.delete('/auth/sign-out');
  return data;
}

export async function getCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
