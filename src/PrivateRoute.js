import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  token: PropTypes.string
}

const defaultProps = {
  // Default Props go here
}

const PrivateRoute = ({ component: Component, token, ...routeProps }) =>
  <Route
    {...routeProps}
    render={props =>
      token && token.length > 0
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />

PrivateRoute.propTypes = propTypes
PrivateRoute.defaultProps = defaultProps

export default PrivateRoute
