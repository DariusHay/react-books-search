import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Books() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Your Book Collection</h1>
            <hr></hr>
            {books.length > 0 ? (
                <div className="container">
                    {books.map(book => (
                        <div key={book._id} className="card mb-3" style={{ maxWidth: '100%' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={book.image} className="card-img" alt={book.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <p className="card-text">{book.description}</p>
                                        <p className="card-text">By: {book.author}</p>
                                        <a style={{ float: 'left' }} href={book.link} target="_blank">Book Link</a>
                                        <br></br>
                                        <a style={{ float: 'left', marginTop: '3%' }} onClick={() => deleteBook(book._id)} href="">Delete Book</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                    <div className="container">
                        <h1>No Results to Display</h1>
                    </div>
                )}
        </div>
    )

}

export default Books;