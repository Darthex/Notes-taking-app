import React from 'react'
import Notes from "./Notes.jsx";
import NewNote from "./NewNote.jsx";

export default function NotesList(props) {
    return(
        <div className="notes--list">
            {props.notes.map(value => <Notes
                id={value.id}
                text={value.text}
                date={value.date}
                delete={props.delete}
            />)}

            <NewNote newNote={props.newNote}/>

        </div>
    )
}
