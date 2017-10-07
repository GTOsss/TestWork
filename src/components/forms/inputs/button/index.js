import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import style from './button.scss';

const Button = ({ value, type, onClick, className, disabled }) => (
  <button
    className={cx(className, disabled ? style.buttonDis : style.button)}
    type={!disabled ? type : 'button'}
    onClick={e => !disabled && onClick && onClick(e)}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  disabled: false,
  onClick: null,
};

export default Button;
