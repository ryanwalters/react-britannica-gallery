
import PropTypes from 'prop-types';

const Media = PropTypes.shape({
  altText: PropTypes.string,
  assemblyId: PropTypes.number,
  assemblyUrl: PropTypes.string,
  caption: PropTypes.string,
  captionWithoutTables: PropTypes.string,
  credit: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  expandedUrl: PropTypes.string,
  identifier: PropTypes.string,
  imageMap: PropTypes.any,
  licenseTitle: PropTypes.string,
  licenseUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  type: PropTypes.string,
});

export default Media;
