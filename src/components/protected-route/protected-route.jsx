import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { getUser } from '../../services/actions/user';
import { getCookie } from '../../utils/cookie';
import PropTypes from 'prop-types';

export function ProtectedRoute({ children, ...rest }) {
  const userData = useSelector((store) => store.user.userData);
  const location  = useLocation();
  const accessToken = getCookie('accessToken');
  
  useEffect(() => {
    if (accessToken) {
      getUser(accessToken)
    }
  },[accessToken])

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

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired
}
