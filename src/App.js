// App.js
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1>My Note Taking App</h1>
      <NoteList notes={notes} onDelete={deleteNote} />
      <NoteEditor onAdd={addNote} />
    </div>
  );
}

export default App;
