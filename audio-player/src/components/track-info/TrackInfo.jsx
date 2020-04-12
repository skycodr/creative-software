import React from 'react';
import PropTypes from 'prop-types';

import { Card, Layout } from 'antd';

import { ArtistDef, TrackDef } from '../../prop-defs';

const TrackInfo = (props) => {
  const { cover, title, artists, track: { name } } = props;

  return (
    <Card title={title} style={{ width: '100%' }}>
      <Layout>
        <Layout.Sider>
          <img src={cover} alt={name} style={{ width: '100%' }} />
        </Layout.Sider>
        <Layout.Content>
          <p>Title: {name} </p>
          <p>Artists: </p>
          <ol>
            {
              artists.map(artist => <li key={artist.id}>{artist.name}</li>)
            }
          </ol>
        </Layout.Content>
      </Layout>
    </Card>
  );
};

TrackInfo.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  artists: PropTypes.arrayOf(ArtistDef).isRequired,
  track: TrackDef.isRequired,
};

TrackInfo.defaultProps = {
  cover: "./images/no-cover.png"
};

export default TrackInfo;