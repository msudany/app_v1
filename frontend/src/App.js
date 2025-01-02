import React, { useEffect, useState } from 'react';
import AddBook from './components/AddBook';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Books</h1>
            <AddBook />
            <ul className="list-group">
                {books.map(book => (
                    <li key={book.id} className="list-group-item">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;