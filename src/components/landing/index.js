'use strict';

import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Landing</h1>
        <p className="App-intro">
          Welcome to the fantastic, magically, amazing TODO App!
        </p>
      </div>
    );
  }
}

export default Landing;