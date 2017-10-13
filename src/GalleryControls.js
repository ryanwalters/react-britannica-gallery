
import React from 'react';
import PropTypes from 'prop-types';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
  FullscreenIcon,
  FullscreenExitIcon,
} from './Icons';

const controlsStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
};

const buttonStyle = {
  WebkitAppearance: 'none',
  border: 'none',
  background: 'none',
  outline: 0,
  zIndex: 1,
};

const iconStyles = {
  cursor: 'pointer',
};

const navigationStyle = {
  alignItems: 'center',
  display: 'flex',
  position: 'fixed',
  top: 0,
  bottom: 0,
  zIndex: 0,
};

const previousNavigationStyles = {
  left: 0,
};

const nextNavigationStyles = {
  right: 0,
};

const GalleryControls = ({ handleClose, handleFullscreen, handlePrevious, handleNext, state }) => {
  const { media, index, isFullscreen } = state;

  return (
    <div className="eb-gallery-controls" style={controlsStyle}>

      {/* Close, Fullscreen */}

      <button onClick={handleClose} style={buttonStyle}>
        <CloseIcon style={iconStyles} />
      </button>
      <button onClick={handleFullscreen} style={buttonStyle}>
        {isFullscreen ?
          <FullscreenExitIcon style={iconStyles} /> : <FullscreenIcon style={iconStyles} />}
      </button>

      {/* Navigation */}

      {index > 0 ?
        <button
          onClick={handlePrevious}
          style={{ ...buttonStyle, ...navigationStyle, ...previousNavigationStyles }}
        >
          <ArrowLeftIcon style={iconStyles} />
        </button> : null
      }

      {index < media.length - 1 ?
        <button
          onClick={handleNext}
          style={{ ...buttonStyle, ...navigationStyle, ...nextNavigationStyles }}
        >
          <ArrowRightIcon style={iconStyles} />
        </button> : null
      }

    </div>
  );
};

GalleryControls.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleFullscreen: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GalleryControls;
