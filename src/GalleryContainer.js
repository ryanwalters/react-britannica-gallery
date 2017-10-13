
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import screenfull from 'screenfull';
import GalleryControls from './GalleryControls';
import Media from './models/media';
import MediaViewer from './media/MediaViewer';

class EbGallery extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    display: PropTypes.string,
    externalControls: PropTypes.func,
    media: PropTypes.arrayOf(Media).isRequired,
    style: PropTypes.objectOf(PropTypes.any),
    videoPlayerId: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    display: 'block',
    externalControls: () => {},
    style: {},
    videoPlayerId: '',
  };


  // --- Constructor

  constructor(props) {
    super(props);

    this.state = {
      isFullscreen: false,
      isVisible: false,
      media: props.media,
      index: 0,
    };
  }


  // --- Pre-render lifecycle methods

  componentDidMount() {
    const { externalControls } = this.props;

    // Attach external controls (e.g. to control opening and closing of the gallery)

    externalControls(this);

    // Attach event listeners that aren't covered by React

    screenfull.onchange(() => this.setState({ isFullscreen: screenfull.isFullscreen }));
  }

  componentDidUpdate() {
    // Toggle the `modal-open` class on <body>

    document.body.classList.toggle('modal-open', this.state.isVisible);
  }


  // --- Additional methods

  handleClose = () => {
    this.setState({ isVisible: false });
  };

  handleOpen = () => {
    this.setState({ isVisible: true });
  };

  handleFullscreen = () => {
    screenfull.toggle();
  };

  handlePrevious = () => {
    this.setState(prevState => ({ index: prevState.index - 1 }));
  };

  handleNext = () => {
    this.setState(prevState => ({ index: prevState.index + 1 }));
  };


  // --- Render

  render() {
    const { isVisible, media, index } = this.state;
    const { className, display, style, videoPlayerId } = this.props;

    const classes = classNames(
      'eb-gallery',
      className,
    );

    const galleryStyles = {
      display: isVisible ? display : 'none',
      backgroundColor: '#000',
      color: '#fff',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflowX: 'hidden',
      overflowY: 'auto',
      zIndex: 100000,
      ...style,
    };

    return (
      <div className={classes} style={galleryStyles}>
        <MediaViewer
          currentMedia={media[index]}
          videoPlayerId={videoPlayerId}
        />
        <GalleryControls
          handleClose={this.handleClose}
          handleFullscreen={this.handleFullscreen}
          handlePrevious={this.handlePrevious}
          handleNext={this.handleNext}
          state={this.state}
        />
      </div>
    );
  }
}

export default EbGallery;
