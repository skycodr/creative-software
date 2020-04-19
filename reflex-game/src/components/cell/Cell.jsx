import React from 'react';
import { CellProps } from '../../prop-defs';

const style = ({ x, y }, size) => ({
  left: x,
  top: y,
  width: size,
  height: size,
  border: '0.5px solid lightgray',
  position: 'absolute',
});

const Cell = (props) => {
  const { id, index, size, pos } = props.dataSource;

  return (
    <div style={style(pos, size)}>
      <span>{`${id}(${index})`}</span>
    </div>
  );
};

Cell.propTypes = {
  dataSource: CellProps,
};

export default Cell;
