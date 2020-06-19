import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from '../store';
import authLayout from '../pages/_layouts/Auth';
import defaultLayout from '../pages/_layouts/Default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  undefinedRoute,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  if (undefinedRoute && !signed) {
    return <Redirect to="/" />;
  }
  if (undefinedRoute && signed) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? defaultLayout : authLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  undefinedRoute: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
  undefinedRoute: false,
};
