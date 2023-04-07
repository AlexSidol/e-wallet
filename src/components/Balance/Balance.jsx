import React, { useEffect } from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';
import { useAuth } from 'hooks/useAuth';
// import { Toast } from './../Toasts/Toasts';
import { toast } from 'react-toastify';
import { Toast } from './../Toasts/Toasts';
import 'react-toastify/dist/ReactToastify.css';

const Balance = () => {
  const { balance } = useAuth();
  const notify = balance =>
    toast(`Pay your attention. You have a negative balance: ${balance}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  useEffect(() => {
    if (!balance || balance.slice(0, 1) !== '-') return;
    notify(balance);
  }, [balance]);

  return (
    <BalanceWrap>
      <Toast />
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceText fontFamily="Poppins, sans-serif">
        {' '}
        &#8372; {balance}
      </BalanceText>
    </BalanceWrap>
  );
};

export default Balance;
