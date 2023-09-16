import React, { useState } from 'react';
import './NoteItem.css';

const NoteItem = ({ note, deleteNote, updateNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(note.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        updateNote(note.id, editedText);
    };

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    return (
        <div className="note">
            {isEditing ? (
                <div>
                    <textarea
                        className="edit-textarea"
                        value={editedText}
                        onChange={handleTextChange}
                    />
                    <button className="save-button" onClick={handleSave}>
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <p>{note.text}</p>
                    <button className="edit-button" onClick={handleEdit}>
                        <i className="fa fa-pencil"></i> Edit
                    </button>
                    <button className="delete-button" onClick={() => deleteNote(note.id)}>
                        <i className="fa fa-trash"></i> Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default NoteItem;
