const PlaylistModel = ({
  id = null,
  name,
  artists = [],
  tracks = [],
} = {}) => ({
  id,
  name,
  artists,
  tracks,
});

export default PlaylistModel;
