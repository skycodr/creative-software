import React from 'react';
import PropTypes from 'prop-types';

import { useTimer } from '../../hooks';
import { TWO_PI, transformRange } from '../../utils/Numerical';

const style = (size) => ({
  width: size,
  height: 10,
  backgroundColor: 'lightgray',
  border: '1px solid lightgray',
  position: 'relative',
});

const thumbStyle = (size, thumbSize, posX) => ({
  position: 'fixed',
  width: thumbSize,
  height: thumbSize,
  backgroundColor: 'red',
  border: '1px solid red',
  left: transformRange(posX, -size, size, 0, size - thumbSize),
});

const Oscillator = (props) => {
  const { size, onUpdate, posX, fps, thumbSize, period } = props;

  const timer = useTimer({
    callback: (frameCount) => {
      const amplitude = props.size;
      const x = amplitude * Math.sin(TWO_PI * frameCount / period);
      onUpdate && onUpdate(Math.ceil(x));
    },
    fps
  });

  if (timer && !timer.isStarted()) {
    timer.start();
  }

  return <div style={style(size)}><div style={thumbStyle(size, thumbSize, posX)} /></div>;
};


Oscillator.propTypes = {
  size: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  threshold: PropTypes.number.isRequired,
  posX: PropTypes.number,
  fps: PropTypes.number,
  period: PropTypes.number,
  thumbSize: PropTypes.number,
};

Oscillator.defaultProps = {
  posX: 0,
  fps: 30,
  period: 120,
  thumbSize: 10,
};

export default Oscillator;
