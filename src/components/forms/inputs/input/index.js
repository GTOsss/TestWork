import React from 'react';
import PropTypes from 'prop-types';

import style from './input.scss';

const Input = ({ input: { value, onChange }, meta, placeholder }) => (
  <div className={style.wrapInput}>
    <input
      className={style.input}
      onBlur={e => onChange(e.target.value)}
      type="text"
      defaultValue={value}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
};

export default Input;
