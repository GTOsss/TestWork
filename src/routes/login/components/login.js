import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../../components/forms/login-form';

const Login = ({ onSubmit }) => (
  <div className="col-md-12">
    <LoginForm onSubmit={onSubmit} />
  </div>
);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
