import { useEffect, useState } from 'react';
import { Timer } from '../utils';

const useTimer = ({ callback, tickSize = 1, fps = 30 } = {}) => {
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    const _timerRef = Timer(callback, tickSize, fps);
    setTimer(_timerRef);
  }, []);
  return timer;
};

export default useTimer;
