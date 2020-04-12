const TrackModel = ({
  index = null,
  id = null,
  name = null,
  path = null,
} = {}) => ({
  index,
  id,
  name,
  src: path,
});

export default TrackModel;
