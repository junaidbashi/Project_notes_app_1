import React from 'react';

function Header() {
  return (
    <header>
      <h1>My Note Taking App</h1>
    </header>
  );
}

export default Header;

// Path: src/NoteEditor.js
import React, { useState } from 'react';

function NoteEditor({ onAdd }) {
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        onAdd({ id: Date.now(), content });
        setContent('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Add Note</button>
        </form>
    );
    }

export default NoteEditor;

// Path: src/NoteList.js
import React from 'react';

function NoteList({ notes, onDelete }) {
    return (
        <ul>
        {notes.map(note => (
            <li key={note.id}>
            {note.content}
            <button onClick={() => onDelete(note.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );
}

export default NoteList;

// Path: src/App.js
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

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
        <h1>My Note Taking App</h1>
        <NoteList notes={notes} onDelete={deleteNote} />
        <NoteEditor onAdd={addNote} />
        </div>
    );
}

export default App;

// Path: src/Header.js
import React from 'react';

function Header() {
    return (
        <header>
        <h1>My Note Taking App</h1>
        </header>
    );
}

export default Header;

// Path: src/NoteEditor.js
import React, { useState } from 'react';

function NoteEditor({ onAdd }) {
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        onAdd({ id: Date.now(), content });
        setContent('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Add Note</button>
        </form>
    );
}

export default NoteEditor;

// Path: src/NoteList.js
import React from 'react';

function NoteList({ notes, onDelete }) {
    return (
        <ul>
        {notes.map(note => (
            <li key={note.id}>
            {note.content}
            <button onClick={() => onDelete(note.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );
}

