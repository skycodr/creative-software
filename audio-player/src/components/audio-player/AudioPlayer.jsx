import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Layout, Slider, Space } from 'antd';
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  FastBackwardOutlined,
  FastForwardOutlined

} from '@ant-design/icons';

import { AudioClip } from '../../utils';
import { isDefined } from '../../helpers';

const AudioPlayer = (props) => {
  const { dataSource, onJumpTrack } = props;

  const [audioClip, setAudioClip] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackedPosition, setTrackedPosition] = useState(0);
  const [draggedPosition, setDraggedPosition] = useState(null);

  /* --------------------------------------- */
  /* Start: side effects                     */
  /* --------------------------------------- */

  // If audio source changes recrate an audio clip
  useEffect(() => {
    if (dataSource) {

      if (audioClip) {
        audioClip.cleanUp();
      }

      const clip = AudioClip(dataSource, (value) => {
        const { paused, duration, currentTime } = value;
        if (isDefined(paused)) {
          setIsPaused(paused);
        }

        if (isDefined(duration)) {
          setTrackDuration(duration);
        }

        if (isDefined(currentTime)) {
          setTrackedPosition(Math.floor(currentTime));
        }

      });

      setAudioClip(clip);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);

  // If the audio clip changes play that audio clip
  useEffect(() => {
    if (audioClip) {
      audioClip.togglePlay();
    }
  }, [audioClip]);

  /* --------------------------------------- */
  /* End: side effects                     */
  /* --------------------------------------- */

  /* --------------------------------------- */
  /* Start: event handlers                   */
  /* --------------------------------------- */
  // Play button handler
  const hOnClick = () => {
    if (audioClip) {
      audioClip.togglePlay();
    }
  };

  const hOnChange = (value) => {
    if (audioClip) {
      audioClip.stop();
    }
    setDraggedPosition(value);
  };

  const hOnAfterChange = (value) => {
    if (audioClip) {
      setTrackedPosition(value);
      audioClip.scrub(value);
      audioClip.togglePlay();
    }
    setDraggedPosition(null);
  };

  /* --------------------------------------- */
  /* End: event handlers                   */
  /* --------------------------------------- */

  return (
    <Layout>
      <Layout.Content>
        <Slider
          defaultValue={0}
          max={trackDuration}
          value={draggedPosition || trackedPosition}
          step={0.00001} tipFormatter={null}
          onChange={hOnChange}
          onAfterChange={hOnAfterChange} />
      </Layout.Content>
      <Layout.Content>
        <Space>
          <Button onClick={() => onJumpTrack(-1)} shape="circle" icon={<FastBackwardOutlined />} />
          <Button onClick={hOnClick} shape="circle" icon={isPaused ? <PlayCircleOutlined /> : <PauseCircleOutlined />} />
          <Button onClick={() => onJumpTrack(1)} shape="circle" icon={<FastForwardOutlined />} />
        </Space>
      </Layout.Content>
    </Layout>
  );
};

AudioPlayer.propTypes = {
  dataSource: PropTypes.string,
  onJumpTrack: PropTypes.func.isRequired,
};

AudioPlayer.defaultProps = {
  dataSource: null,
};

export default AudioPlayer;