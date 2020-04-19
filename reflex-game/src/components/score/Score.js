import React from 'react';
import PropTypes from 'prop-types';

const style = () => ({
  fontWeight: 'bold',
  fontSize: 30,
});

const Score = ({ value }) => {
  return <div style={style()}>{value}</div>;
};

Score.propTypes = {
  value: PropTypes.number,
};

Score.defaultProps = {
  value: 0,
};

export default Score;
