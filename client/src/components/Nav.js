import React from "react";

function Nav() {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/saved">Saved books</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;