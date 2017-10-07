import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../../components/forms/login-form';

import style from './login.scss';

const Login = ({ onSubmit, values, showTable }) => (
  <div className={style.login}>
    <LoginForm onSubmit={onSubmit} />
    <div>
      {showTable ?
        <table className="table table-striped" style={{ marginTop: '20px' }}>
          <tbody>
            <tr>
              <td>firstName</td>
              <td>{values.firstName}</td>
            </tr>
            <tr>
              <td>lastName</td>
              <td>{values.lastName}</td>
            </tr>
            {values.profession ?
              <tr>
                <td>profession</td>
                <td>{values.profession.value}</td>
              </tr>
              : null}
            <tr>
              <td>phoneCode</td>
              <td>{values.phoneCountry}</td>
            </tr>
            <tr>
              <td>phoneNumber</td>
              <td>{values.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
        : null}
    </div>
  </div>
);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.any),
  showTable: PropTypes.bool,
};

Login.defaultProps = {
  values: {},
  showTable: false,
};

export default Login;
