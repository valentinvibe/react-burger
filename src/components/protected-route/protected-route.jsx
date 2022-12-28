import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom'

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
