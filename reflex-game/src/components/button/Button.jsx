import React from 'react';
import PropTypes from "prop-types";

const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  onClick: () => { }
};

export default Button;
