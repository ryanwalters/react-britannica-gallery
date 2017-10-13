
import React from 'react';
import PropTypes from'prop-types';
import JWPlayer from 'react-jw-player';
import Media from '../models/media';

const viewerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  paddingLeft: 65,
  paddingRight: 65,
};

const MediaViewer = ({ currentMedia, videoPlayerId }) => (
  <div className="eb-gallery-viewer" style={viewerStyles}>
    {(() => {
      switch (currentMedia.type) {
        case 'VIDEO':
          return (
            <JWPlayer
              playerId={videoPlayerId}
              playerScript={`//content.jwplatform.com/libraries/${videoPlayerId}.js`}
              playlist={[{
                sources: [{
                  file: currentMedia.assemblyUrl,
                }],
                image: currentMedia.thumbnailUrl,
              }]}
              className="eb-jwplayer-wrapper"
            />
          );

        case 'IMAGE':
        default:
          return (
            <img
              src={currentMedia.expandedUrl || currentMedia.assemblyUrl}
              alt={currentMedia.caption}
            />
          );
      }
    })()}
  </div>
);

MediaViewer.propTypes = {
  currentMedia: Media.isRequired,
  videoPlayerId: PropTypes.string,
};

MediaViewer.defaultProps = {
  videoPlayerId: '',
};

export default MediaViewer;
