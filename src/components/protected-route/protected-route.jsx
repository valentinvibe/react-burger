import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../../services/actions/user";
import { getCookie } from "../../utils/cookie";
import PropTypes from "prop-types";
import { loginPage, homePage } from "../../utils/variables";
import { getUserData } from "../../utils/functions";

export function ProtectedRoute({ onlyUnAuth = true, children, ...rest }) {
  const userData = useSelector(getUserData);
  const location = useLocation();
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    if (accessToken) {
      getUser(accessToken);
    }
  }, [accessToken]);

  if (userData && onlyUnAuth) {
    const { from } = location.state || { from: { pathname: homePage } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  if (!onlyUnAuth && !userData) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: loginPage, state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  onlyUnAuth: PropTypes.bool,
};
