import React from 'react';
import LoginComponent from './components/login';

class Login extends React.Component {
  onSubmit(values) {
    console.log('values: ', values);
  }

  render() {
    return (
      <LoginComponent onSubmit={this.onSubmit} />
    );
  }
}

export default Login;
