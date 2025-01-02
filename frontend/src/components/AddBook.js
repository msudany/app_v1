import React, { useState } from 'react';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author, description })
        })
        .then(response => response.json())
        .then(data => {
            alert('Book added successfully!');
            setTitle('');
            setAuthor('');
            setDescription('');
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <h2>Add a Book</h2>
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Author</label>
                <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
    );
}

export default AddBook;