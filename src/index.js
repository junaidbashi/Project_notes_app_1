import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// Path: src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// Path: src/index.js
// Compare this snippet from src/NoteList.js:
// import React from 'react';

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
// Compare this snippet from src/App.js:

