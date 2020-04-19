import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useTimer } from '../../hooks';
import { TWO_PI } from '../../utils/Numerical';

const style = (size) => ({
  width: size,
  height: 10,
  backgroundColor: 'lightgray',
  border: '1px solid lightgray',
  position: 'relative',
});

const thumbStyle = (x) => ({
  position: 'fixed',
  width: 10,
  height: 10,
  backgroundColor: 'red',
  border: '1px solid red',
  left: x,
});

const Oscillator = (props) => {
  const { size, onUpdate, posX, fps } = props;

  const timer = useTimer({
    callback: (frameCount) => {
      const amplitude = props.size - 10;
      const period = 60;
      const x = amplitude * Math.sin(TWO_PI * frameCount / period);
      onUpdate && onUpdate(x);
    },
    fps
  });

  if (timer && !timer.isStarted()) {
    timer.start();
  }

  return <div style={style(size)}><div style={thumbStyle(posX)} /></div>;
};


Oscillator.propTypes = {
  size: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  posX: PropTypes.number,
  fps: PropTypes.number
};

Oscillator.defaultProps = {
  posX: 0,
  fps: 30,
};

export default Oscillator;
