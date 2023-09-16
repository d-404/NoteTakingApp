import React, { useState } from 'react';
import './NewNoteForm.css';

const NewNoteForm = ({ addNote }) => {
    const [newNote, setNewNote] = useState('');

    const handleAddNote = () => {
        if (newNote.trim() !== '') {
            addNote(newNote);
            setNewNote('');
        } else {
            alert("Note text can't be empty.");
        }
    };

    return (
        <div className="note-form">
            <input
                type="text"
                placeholder="Add a new note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                required
            />
            <button onClick={handleAddNote} disabled={!newNote.trim()}>
                <i className="fa fa-plus"></i> Add
            </button>
        </div>
    );
};

export default NewNoteForm;
