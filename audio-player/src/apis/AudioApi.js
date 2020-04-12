import playlist from '../data/playlist.json';
import trackData from '../data/tracks.json';

import { PlaylistModel, TrackModel } from '../models';

const DIR = process.env.REACT_APP_MUSIC_DIRECTORY;

/**
 * Retrieve a playlist
 *
 */
export const getPlaylist = () => {
  const { albums } = playlist;
  const data = PlaylistModel(albums[0]);
  return data;
};

/**
 * Retrieves info for a given trackId
 *
 * @param {string} trackId
 */
export const getTrackInfo = (trackId) => {
  let data = null;

  const { tracks } = trackData;
  const trackIndex = tracks.findIndex(({ id }) => trackId === id);

  if (trackIndex > -1) {
    const track = tracks[trackIndex];
    const { file } = track;
    data = TrackModel({ index: trackIndex, path: `${DIR}/${file}`, ...track });
  }

  return data;
};
