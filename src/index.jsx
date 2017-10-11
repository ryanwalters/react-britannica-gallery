
import React from 'react';

class EbGallery extends React.Component {
  state = {
    name: 'Component!',
  };

  render() {
    return (
      <div>${this.state.name}</div>
    );
  }
}

export default EbGallery;
