import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote('');
    } else {
      alert("Note text can't be empty.");
    }
  };


  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id) => {
    const updatedText = prompt('Edit note:', notes.find((note) => note.id === id).text);
    if (updatedText !== null) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, text: updatedText } : note
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>Note Taking App</h1>
      <div className="note-form">
        <input
          type="text"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          required
        />
        <button onClick={addNote} disabled={!newNote.trim()}>
          <i className="fa fa-plus"></i> Add
        </button>
      </div>

      <div className="note-list">
        {notes.slice().reverse().map((note) => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <button className="edit-button" onClick={() => updateNote(note.id)}>
              <i className="fa fa-pencil"></i> Edit
            </button>
            <button className="delete-button" onClick={() => deleteNote(note.id)}>
              <i className="fa fa-trash"></i> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
