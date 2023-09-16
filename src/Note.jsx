import React from 'react';

const Note = ({ note, onDelete, onUpdate }) => {
    return (
        <div className="note">
            <p>{note.text}</p>
            <button onClick={() => onDelete(note.id)}>Delete</button>
            <button onClick={() => onUpdate(note.id)}>Edit</button>
        </div>
    );
};

export default Note;
