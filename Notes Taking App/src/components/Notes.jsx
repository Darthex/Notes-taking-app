import React from 'react'
import {MdDeleteForever} from "react-icons/all.js";

export default function Notes(props) {

    return(
        <div className="note">
            <span>
                {props.text}
            </span>
            <div className="note--footer">
                <small>
                    {props.date}
                </small>

                <MdDeleteForever className="delete--icon" size="1.3em" onClick={() => props.delete(props.id)}/>

            </div>
        </div>
    )
}
