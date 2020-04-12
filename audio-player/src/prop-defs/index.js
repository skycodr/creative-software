import PropTypes from 'prop-types';

export const TrackMetaInfoDef = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});

export const TrackDef = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
});

export const ArtistDef = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});


export const PlaylistDef = PropTypes.shape({
  id: PropTypes.string,
  artists: PropTypes.arrayOf(ArtistDef),
  tracks: PropTypes.arrayOf(TrackMetaInfoDef),
});
