import React from "react";
import API from "../utils/API";

function savBook(book) {
    const newBook = {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.canonicalVolumeLink
    }

    API.saveBook(newBook);
}

function Details(props) {
    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: '100%' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.card.volumeInfo.imageLinks.thumbnail} className="card-img" alt={props.card.volumeInfo.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.card.volumeInfo.title}</h5>
                            <p className="card-text">{props.card.volumeInfo.description}</p>
                            <p className="card-text">By: {props.card.volumeInfo.authors}</p>
                            <a style={{ float: 'left' }} href={props.card.volumeInfo.canonicalVolumeLink} target="_blank">Book Link</a>
                            <a style={{ float: 'right' }} href="" onClick={props.switch}>Go Back</a>
                            <br></br>
                            <a style={{ float: 'left', marginTop: '3%' }} onClick={(event) => {event.preventDefault(); savBook(props.card)}} href="">Save Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;