import React from 'react';
import LoginComponent from './components/login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: {}, showTable: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log('values: ', values);
    this.setState({ values, showTable: true });
  }

  render() {
    return (
      <LoginComponent
        onSubmit={this.onSubmit}
        values={this.state.values}
        showTable={this.state.showTable}
      />
    );
  }
}

export default Login;
