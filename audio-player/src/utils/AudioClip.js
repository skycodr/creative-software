/**
 *
 * @param {array} source
 */
const AudioClip = (source, callback) => {
  const audio = new Audio(source);
  audio.muted = true;

  const hOnLoadedData = () => {
    const { duration } = audio;
    callback && callback({ duration });
  };

  const hOnPause = () => {
    const { paused } = audio;
    callback && callback({ paused });
  };

  const hOnUpdate = (e) => {
    const { currentTime } = e.target;
    callback && callback({ currentTime });
  };

  audio.addEventListener('loadeddata', hOnLoadedData);
  audio.addEventListener('pause', hOnPause); // This only detect pause. Need when cleaning up
  audio.addEventListener('timeupdate', hOnUpdate);

  return {
    togglePlay: () => {
      let paused = false;
      if (audio.paused) {
        if (audio.muted) {
          audio.muted = false;
        }
        audio.play();
        paused = false;
      } else {
        paused = true;
        audio.pause();
      }
      callback && callback({ paused });
    },
    stop: () => {
      audio.pause();
    },
    scrub: (pos) => {
      audio.currentTime = pos;
    },
    cleanUp: () => {
      audio.pause();
      audio.removeEventListener('loadeddata', hOnLoadedData);
      audio.removeEventListener('pause', hOnPause);
      audio.removeEventListener('timeupdate', hOnUpdate);
      audio = null;
    },
  };
};

export default AudioClip;
