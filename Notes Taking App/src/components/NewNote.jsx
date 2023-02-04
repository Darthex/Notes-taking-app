import React from "react";

export default function NewNote(props) {

    const [text, setText] = React.useState("")
    const characterLimit = 200

    function handleChange(e) {
        if(characterLimit - e.target.value.length >= 0) {
            setText(e.target.value)
        }
    }

    function handleSave() {
        if(text.trim().length > 0) {
            props.newNote(text)
            setText("")
        }
    }

    return(
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                value={text}
                onChange={handleChange}>
            </textarea>
            <div className="note--footer">
                <small>
                    {characterLimit - text.length} Remaining
                </small>
                <button className="dark--mode--button"
                        onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
