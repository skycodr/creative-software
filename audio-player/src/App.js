import React, { useEffect, useState } from 'react';

import { Layout, Menu } from 'antd';

import { TrackInfo, AudioPlayer } from './components';

import { AudioApi } from './apis';

import { PlaylistModel, TrackModel } from './models';
import { clamp } from './helpers';

function App() {
  const [playlistData, setPlaylistData] = useState(PlaylistModel());
  const [selectedTrack, setSelectedTrack] = useState(TrackModel());

  /* --------------------------------------- */
  /* Start: side effects                     */
  /* --------------------------------------- */

  // Initialize app
  useEffect(() => {
    const playlist = AudioApi.getPlaylist();
    setPlaylistData(playlist);
  }, []);

  // Setup the default selected track
  // if the play list change
  useEffect(() => {
    if (playlistData.id) {
      const track = AudioApi.getTrackInfo(playlistData.tracks[0].id);
      if (track) {
        setSelectedTrack(track);
      }
    }
  }, [playlistData]);

  /* --------------------------------------- */
  /* End: side effects                       */
  /* --------------------------------------- */

  /* --------------------------------------- */
  /* Start: event handlers                   */
  /* --------------------------------------- */

  // Track changes when list is clicked
  const hOnMenuSelect = ({ key: id }) => {
    const track = AudioApi.getTrackInfo(id);
    setSelectedTrack(track);
  };

  // Track changes through play controls
  const hOnJumpTrack = (dir) => {
    if (selectedTrack.id) {
      const { index: currentIndex } = selectedTrack;
      const { tracks } = playlistData;
      const nextPossibleIndex = currentIndex + dir;
      const nextIndex = clamp(nextPossibleIndex, 0, tracks.length - 1);
      if (nextIndex !== currentIndex) {
        const track = AudioApi.getTrackInfo(tracks[nextIndex].id);
        setSelectedTrack(track);
      }
    }
  };

  /* --------------------------------------- */
  /* End: event handlers                     */
  /* --------------------------------------- */

  const { name: albumName, artists } = playlistData;

  return (
    <Layout>
      <Layout.Header>Audio Player App</Layout.Header>
      <Layout>
        <Layout.Content>
          <TrackInfo
            track={selectedTrack}
            artists={artists}
            title={albumName}
          />
          <AudioPlayer
            dataSource={selectedTrack.src}
            onJumpTrack={hOnJumpTrack}
          />
        </Layout.Content>
        <Layout.Sider>
          <Menu onSelect={hOnMenuSelect} selectedKeys={[selectedTrack.id]}>
            {playlistData.tracks.map((item) => (
              <Menu.Item key={item.id}>{item.name}</Menu.Item>
            ))}
          </Menu>
        </Layout.Sider>
      </Layout>
      <Layout.Footer>Creative Software - Project 2</Layout.Footer>
    </Layout>
  );
}

export default App;
