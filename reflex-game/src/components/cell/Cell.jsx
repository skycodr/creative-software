import React from 'react';
import PropTypes from 'prop-types';

const style = (x, y, size) => ({
  left: x,
  top: y,
  width: size,
  height: size,
  border: '1px solid lightgray',
  position: 'absolute',
});

const Cell = (props) => {
  const { index, size, pos: { x, y }, } = props.dataSource;

  return (
    <div style={style(x, y, size)}>
      <span>{index}</span>
    </div>
  );
};

Cell.propTypes = {
  dataSource: PropTypes.shape({
    index: PropTypes.number,
    size: PropTypes.number,
    pos: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    cPos: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }).isRequired,
};

export default Cell;
