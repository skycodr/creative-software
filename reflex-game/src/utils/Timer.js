const Timer = (callback, tickSize, fps) => {
  let intervalPerFrame = 1000 / fps;
  let timerId;
  let isStarted = false;
  let tick = 0;

  return () => {
    let previousTime = Date.now();
    const loop = () => {
      timerId = requestAnimationFrame(loop);
      let currentTime = Date.now();
      var delta = currentTime - previousTime;
      if (delta > intervalPerFrame) {
        previousTime = currentTime - (delta % intervalPerFrame);
        tick = tick + tickSize; 
        callback && callback(tick);
      }
    };
    return {
      start: () => {
        isStarted = true;
        timerId = requestAnimationFrame(loop);
      },
      stop: () => {
        isStarted = false;
        cancelAnimationFrame(timerId);
      },
      isStarted: () => isStarted,
    };
  };
};

export default Timer;
