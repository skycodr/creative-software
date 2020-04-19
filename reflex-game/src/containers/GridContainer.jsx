import React from "react";
import PropTypes from 'prop-types';

const style = (size) => ({
  position: 'relative',
  width: size,
  height: size + 2,
});

const GridContainer = ({ size, children }) => (
  <div style={style(size)}>
    {children}
  </div>
);

GridContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  size: PropTypes.number.isRequired,
};


export default GridContainer;
