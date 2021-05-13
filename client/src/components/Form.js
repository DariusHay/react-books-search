import React from "react";

function Form(props) {
    return (
        <div className="input-group mb-3">
        <input 
        type="text" 
        className="form-control" 
        placeholder="Search a book" 
        aria-describedby="basic-addon2"
        value={props.search}
        onChange={props.handleInputChange}
        ></input>
        <div className="input-group-append">
            <span className="input-group-text" onClick={props.handleFormSubmit} id="basic-addon2" style={{ cursor: "pointer" }}>Search</span>
        </div>
    </div>
    )
}

export default Form;