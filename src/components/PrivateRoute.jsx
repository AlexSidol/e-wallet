import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuth, IsRefreshingUser } = useAuth();
  const shouldRedirect = !isAuth && !IsRefreshingUser;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
