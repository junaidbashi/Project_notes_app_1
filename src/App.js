import React, { useState } from 'react';
import './App.css'; // Ensure this line is present and not inside conflict markers
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
    <div className="container">
      <div className="card">
        <Header />
        <NoteList notes={notes} onDelete={deleteNote} />
        <NoteEditor onAdd={addNote} />
      </div>
    </div>
  );
}

export default App;
