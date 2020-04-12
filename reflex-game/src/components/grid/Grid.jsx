import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../cell/Cell';

const Grid = (props) => {
  const { size, cells } = props.dataSource;

  return (
    <div style={{ width: size, height: size, border: `1px solid lightgray`, position: 'fixed' }}>
      {
        cells.map(({ value: cell }, i) => <Cell key={`cell_${i}`} dataSource={cell} />)
      }
    </div>
  );
};

Grid.propTypes = {
  dataSource: PropTypes.shape({
    list: PropTypes.object,
    cells: PropTypes.array,
    size: PropTypes.number,
  }).isRequired,
};

export default Grid;
