import React from 'react';
import NoteUpdateForm from '../note-update-form';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.destroy = this.destroy.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  destroy() {
    this.props.destroyNote(this.props.note);
  }

  handleDoubleClick() {
    this.props.editNote(this.props.note);
  }

  render() {
    if (this.props.note.isEditing) {
      return (
        <div id="note">
          <NoteUpdateForm note={this.props.note} cancelEdit={this.props.cancelEdit} />
        </div>
      );
    }

    return (
      <div id="note" className="note" onDoubleClick={this.handleDoubleClick}>
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.content}</p>
        <button onClick={this.destroy}>Delete</button>
      </div>
    );
  }
}
