import React from 'react'

export default function Header(props) {
    return(
        <nav className="navbar">
            <h1>NOTES</h1>
            <button onClick={props.dm} className="dark--mode--button">
                Dark Mode
            </button>
        </nav>
    )
}