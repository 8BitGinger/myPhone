import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';

function NoteInput({ addNote }) {
  const [noteText, setNoteText] = useState('');

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="note-input2">
      <textarea value={noteText} onChange={handleNoteChange} />
      <button onClick={handleAddNote}>
        <FaSave />
      </button>
    </div>
  );
}

export default NoteInput;
