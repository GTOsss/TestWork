import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div className="container-fluid">
    <div className="row">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

App.defaultProps = {
  children: null,
};

export default App;
