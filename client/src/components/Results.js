import React from "react";

function Results(props) {
    return (
        <div className="row">
            {props.res.map(book => (
                <div key={book.etag} style={{ margin: '2%' }}>
                    <div className="card" style={{ width: 200 }}>
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} className="card-img-top" alt={book.volumeInfo.title} 
                        style={{ height: 200, width: 200 }}/>
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p className="card-text">By: {book.volumeInfo.authors}</p>
                            <a onClick={props.detail} className="btn btn-primary">See Details</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Results;