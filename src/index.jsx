
import React from 'react';

class GenericComponent extends React.Component {
  state = {
    name: 'Component!',
  };

  render() {
    return (
      <div>${this.state.name}</div>
    );
  }
}

export default GenericComponent;
