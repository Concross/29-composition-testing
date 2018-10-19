import React from 'react';
import Note from '../../models/note';

export default class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
    };

    this.onComplete = this.onComplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onComplete(e) {
    e.preventDefault();
    this.props.updateNote(this.props.note, this.state.title, this.state.content);
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  handleClick(e) {
    this.props.cancelEdit(this.props.note);
  }


  render() {
    return (
      <div id="update-note-form-container">
        <form id="update-note-form" onSubmit={this.onComplete}>
          <label htmlFor="title">
            Title:
            <input type="text" name="title" value={this.state.title} placeholder="Buy milk" onChange={this.handleChange} autoComplete="off" />
          </label>
          <label htmlFor="content">
            Content:
            <input type="text" name="content" value={this.state.content} placeholder="Details..." onChange={this.handleChange} autoComplete="off" />
          </label>
          <button type="submit">Update note</button>
        </form>
        <button onClick={this.handleClick}>Cancel</button>
      </div>
    );
  }
}
