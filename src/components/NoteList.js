'use strict';

import React from 'react';
import NoteItem from '../components/NoteItem';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-list">
        <h1>Notes</h1>
        <ul>
          {this.props.notes.map((note, i) => {
            return (
              <NoteItem key={i} note={note} destroyNote={this.props.destroyNote} />
            );
          })}
        </ul>
      </div>
    );
  }
}