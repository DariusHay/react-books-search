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

function savBookNoAuthor(book) {

    const newBookNoAuthor = {
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.canonicalVolumeLink
    }
    API.saveBook(newBookNoAuthor);
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
                            {props.card.volumeInfo.authors ? <> 
                                <p className="card-text">By: {props.card.volumeInfo.authors}</p>
                                <a style={{ float: 'left' }} onClick={(event) => { event.preventDefault(); savBook(props.card); alert('Book successfully Saved!') }} href="">Save Book</a>
                                </>
                             : ( <>
                                    <p className="card-text">No Author Found</p>
                                    <a style={{ float: 'left' }} onClick={(event) => { event.preventDefault(); savBookNoAuthor(props.card); alert('Book successfully Saved!') }} href="">Save Book</a>
                                    </>
                                )}
                            <a style={{ float: 'right' }} href={props.card.volumeInfo.canonicalVolumeLink} target="_blank">Book Link</a>
                            <br></br>
                            <a style={{ float: 'left', marginTop: '3%' }} href="" onClick={props.switch}>Go Back</a>
                            
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;