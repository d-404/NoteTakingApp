import React from 'react';
import NoteItem from './NoteItem';
import './NoteList.css';

const NoteList = ({ notes, deleteNote, updateNote }) => {
    return (
        <div className="note-list">
            {notes.slice().reverse().map((note) => (
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
            ))}
        </div>
    );
};

export default NoteList;
