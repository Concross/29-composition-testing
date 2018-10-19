import uuid from 'uuid/v4';

export default class Note {
  constructor(title, content, isEditing, isCompleted) {
    this.id = uuid();
    this.title = title || '';
    this.content = content || '';
    this.isEditing = isEditing || false;
    this.isCompleted = isCompleted || false;
  }
}
