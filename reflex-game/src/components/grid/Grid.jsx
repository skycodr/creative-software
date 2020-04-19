import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../cell/Cell';
import { NodeProps } from '../../prop-defs';

const Grid = (props) => {
  const { size, dataSource } = props;

  return (
    <div style={{ width: size, height: size, border: `1px solid lightgray`, position: 'fixed' }}>
      {
        dataSource.map(({ value }, i) => <Cell key={`cell_${i}`} dataSource={value} />)
      }
    </div>
  );
};

Grid.propTypes = {
  size: PropTypes.number,
  dataSource: PropTypes.arrayOf(NodeProps).isRequired,
};

export default Grid;
