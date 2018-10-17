'use strict';

import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    this.state.notes.push(note);

    this.setState({ notes: this.state.notes });
  }

  removeNote(note) {
    let notes = this.state.notes;

    notes.splice(notes.indexOf(note), 1);

    this.setState({ notes });
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