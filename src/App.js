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
<<<<<<< HEAD
      <h1>{Header()}</h1>
=======
      <h1>Note Taking App for Niggers</h1>
>>>>>>> 5da22bab8fa42b5a1b3ea38533646b9844afcc70
      <NoteList notes={notes} onDelete={deleteNote} />
      <NoteEditor onAdd={addNote} />
    </div>
  );
}

export default App;
