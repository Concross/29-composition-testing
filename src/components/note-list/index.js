import React from 'react';
import NoteItem from '../note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <div className="note-list">
        <h1>Notes</h1>
        <ul>
          {this.props.notes.map((note, i) => {
            return (
              <NoteItem key={i} note={note} editNote={this.props.editNote} cancelEdit={this.props.cancelEdit} destroyNote={this.props.destroyNote} />
            );
          })}
        </ul>
      </div>
    );
  }
}
