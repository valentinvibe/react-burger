import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/actions/user';
import { getCookie } from '../../utils/cookie';

export function ProtectedRoute({ children, ...rest }) {
  const userData = useSelector((store) => store.user.userData);
  const token = getCookie('accessToken');
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await getUser(token);
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, [init]);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
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
