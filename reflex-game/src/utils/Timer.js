const Timer = (tickSize = .00001, tickInterval = 1000 ) => {
  let timerRef = null;
  let time = 0;
  return (callbackFn) => ({
    reset: () => (time = 0),
    start: () => {
      setInterval(() => {
        time += tickSize;
        callbackFn && callbackFn(time);
      }, tickInterval);
    },
    stop: () => timerRef && clearInterval(timerRef),
  });
};

export default Timer;
