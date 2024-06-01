import React from 'react';
import Note from './Note';

function NoteList({ notes, onDelete }) {
  return (
    <ul>
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default NoteList;
