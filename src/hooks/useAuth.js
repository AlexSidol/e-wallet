import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);
  const loading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);
  const balance1 = useSelector(authSelectors.getBalance);
  let balance;
  if (balance1 || balance1 === 0) {
    const temp = balance1.toFixed(2);
    const numberAfter = temp.slice(temp.length - 2, temp.length);
    let numberBefore = temp.slice(0, temp.length - 3);
    numberBefore = parseInt(numberBefore);
    balance =
      numberBefore.toLocaleString('EN-en').replaceAll(',', ' ') +
      '.' +
      numberAfter;
  }
  return {
    isAuth,
    isRefreshing,
    user,
    error,
    loading,
    balance,
  };
};

// for example: const   {isRefreshing, user} = useAuth();

// you will have    const isRefreshing = state.auth.isRefreshingUser;
// and         const user = state.auth.user; ;
