'use strict';

import React from 'react';
import Note from '../../models/note';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  onComplete(e) {
    e.preventDefault();

    let note = new Note(this.state.title, this.state.content);
    this.props.addNote(note);

    this.setState({ title: '', content: '' });
  }

  render() {
    return (
      <form id="create-note-form" onSubmit={this.onComplete}>
        <label>
          Title:
          <input type="text" name="title" value={this.state.title} placeholder="Buy milk" onChange={this.handleChange} autoComplete="off" />
        </label>
        <label>
          Content:
          <input type="text" name="content" value={this.state.content} placeholder="Details..." onChange={this.handleChange} autoComplete="off" />
        </label>
        <button type="submit">Add item</button>
      </form>
    );
  }
}