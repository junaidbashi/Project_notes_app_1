import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  return (
    <div>
      <h1>{Header()}</h1>
      <NoteList notes={notes} onDelete={deleteNote} />
      <NoteEditor onAdd={addNote} />
    </div>
  );
}

export default App;
