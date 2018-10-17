'use strict';

import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] };
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        {/* Note Form goes here */}
        {/* Note List goes here */}
        {/* (STRETCH) Delete All button goes here */}
      </div>
    );
  }
}

export default Dashboard;