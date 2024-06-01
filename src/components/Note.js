import React from 'react';

function Note({ note, onDelete }) {
  return (
    <li>
      <div className="note">
        <p>{note.content}</p>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </li>
  );
}

export default Note;
