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