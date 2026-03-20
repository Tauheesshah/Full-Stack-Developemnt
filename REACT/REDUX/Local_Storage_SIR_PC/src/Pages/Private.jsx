import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const Private = ({ children }) => {
  const { isAuth } = useSelector((store) => {
    return store.auth;
  });

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
