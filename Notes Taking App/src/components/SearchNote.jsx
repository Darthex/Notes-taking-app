import React from "react";
import {MdSearch} from "react-icons/all.js";

export default function SearchNote(props) {
    return(
        <div className="search">
            <MdSearch className="search--icon" size="1.3em" />
            <input type="text" placeholder="Type to search..." onChange={(event) => props.search(event.target.value)}/>
        </div>
    )
}