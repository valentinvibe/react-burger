import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRoute({ children, ...rest }) {
  const userData = useSelector((store) => store.user.userData);
  const location = useLocation();


  return (
    <Route
      {...rest}
      render={() =>
      userData ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
