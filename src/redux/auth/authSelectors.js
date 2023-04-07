const getIsAuth = state => state.auth.isAuth;

const getUser = state => state.auth.user;
const getBalance = state => state.auth.user.balance;
const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const getError = state => state.auth.error;

const getLoading = state => state.auth.isLoading;

const authSelectors = {
  getError,
  getIsAuth,
  getUser,
  getIsRefreshingUser,
  getLoading,
  getBalance,
};

export default authSelectors;
