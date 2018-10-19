import React from 'react';
import Note from '../../models/note';

export default class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
    };
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  render() {
    return (
      <form id="update-note-form" onSubmit={this.onComplete}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" value={this.state.title} placeholder="Buy milk" onChange={this.handleChange} autoComplete="off" />
        </label>
        <label htmlFor="content">
          Content:
          <input type="text" name="content" value={this.state.content} placeholder="Details..." onChange={this.handleChange} autoComplete="off" />
        </label>
        <button type="submit">Add item</button>
      </form>
    );
  }
}
