import React from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = React.useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
        <NoteEditor addNote={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </header>
    </div>
  );
}

export default App;
