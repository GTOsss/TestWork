import React from 'react';
import PropTypes from 'prop-types';

import style from './flag-icon.scss';

const calcPos = (pos, size, padding = 0) => ((pos - 1) * size) + padding;

const FlagIcon = ({ x, y }) => (
  <div
    className={style.flagIcon}
    style={{ backgroundPosition: `-${calcPos(x, 28, 7)}px -${calcPos(y, 20, 7)}px` }}
  />
);

FlagIcon.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

FlagIcon.defaultProps = {
  x: 7,
  y: 18,
};

export default FlagIcon;

