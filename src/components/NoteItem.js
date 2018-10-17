'use strict';

import React from 'react';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    this.props.destroyNote(this.props.note);
  }

  render() {
    return (
      <div id="note-list">
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.content}</p>
        <button onClick={this.destroy}>Delete</button>
      </div>
    );
  }
}