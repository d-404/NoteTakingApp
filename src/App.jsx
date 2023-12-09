import React, { useState } from 'react';
import './App.css';
import NewNoteForm from './components/NewNoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, text: updatedText } : note))
    );
  };

  return (
    // <div className="App">
    //   <h1>Note-Taking App</h1>
    //   <NewNoteForm addNote={addNote} />
    //   <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    // </div>

    <div className="App">
      <h1>Note Taking App</h1>
      <h3>Write your notes here!</h3>
      <NewNoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
