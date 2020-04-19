import React from 'react';
import PropTypes from 'prop-types';
import { NodeProps } from '../../prop-defs';
import { getOffsetPosition } from '../../helpers';


const style = (size, { x, y }) => ({
  borderRadius: '100%',
  backgroundColor: 'red',
  top: y,
  left: x,
  width: size,
  height: size,
  position: 'absolute'
});


const Player = (props) => {
  const { size, dataSource } = props;
  return dataSource ? <div style={style(size, getOffsetPosition(dataSource.value.cPos, size))} /> : null;
};


Player.propTypes = {
  size: PropTypes.number,
  dataSource: NodeProps,
};

Player.defaultProps = {
  size: 10,
  dataSource: null,
};


export default Player;
