import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Timer } from '../../utils';


const timerRef = Timer();

const wrapAround = (v, min, max) => v > max ? min : v;

const Oscillator = (props) => {
  const [tick, setTick] = useState(0);
  const [oTick, setOTick] = useState(0);
  const [oscillation, setOscillation] = useState(-1);

  useEffect(() => {
    const timerInstance = timerRef(setTick);
    timerInstance.start();
  }, []);

  useEffect(() => {
    const value = wrapAround(oTick + 1, 0, 360);
    const oValue = Math.sin(value);
    setOTick(value);
    setOscillation(oValue);
  }, [tick]);

  return <div>{oscillation}</div>;
};

export default Oscillator;
