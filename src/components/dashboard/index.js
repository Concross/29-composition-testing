import React from 'react';
import NoteForm from '../note-create-form';
import NoteList from '../note-list';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(note) {
    this.state.notes.push(note);

    this.setState({ notes: this.state.notes });
  }

  removeNote(note) {
    const notes = this.state.notes;

    notes.splice(notes.indexOf(note), 1);

    this.setState({ notes });
  }

  editNote(note) {
    const notes = this.state.notes;

    note.isEditing = true;
    this.setState({ notes });
  }

  cancelEdit(note) {
    const notes = this.state.notes;

    note.isEditing = false;
    this.setState({ notes });
  }

  updateNote(note, title, content) {
    const notes = this.state.notes;
    note.isEditing = false;
    note.title = title;
    note.content = content;
    this.setState({ notes });
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        {/* Note Form goes here */}
        <NoteForm addNote={this.addNote} />
        {/* Note List goes here */}
        <NoteList notes={this.state.notes} editNote={this.editNote} cancelEdit={this.cancelEdit} destroyNote={this.removeNote} updateNote={this.updateNote} />
        {/* (STRETCH) Delete All button goes here */}
      </div>
    );
  }
}

export default Dashboard;
