import React, { useState, useEffect } from 'react';
import NoteInput from '../components/NoteInput';
import '../assets/styles/notes.css';
import { FaXbox } from 'react-icons/fa';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  }, []);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
    };
    setNotes([...notes, newNote]);
    localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="notes-input">
        <NoteInput addNote={addNote} />
      </div>
      <div className="notes">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <span className="white">{'•'}</span> {note.text}
            <button onClick={() => deleteNote(note.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
