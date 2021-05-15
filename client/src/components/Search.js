import React from "react";
import Form from "./Form";

function Search(props) {
    return (
        <div>
            <Form 
            search={props.search}
            handleInputChange={props.handleInputChange}
            handleFormSubmit={props.handleFormSubmit}
            />
        </div>
    )
}

export default Search;