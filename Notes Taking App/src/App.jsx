import React from 'react'
import {nanoid} from "nanoid"
import Header from "./components/Header.jsx"
import NotesList from "./components/NotesList.jsx"
import SearchNote from "./components/SearchNote.jsx";

export default function App() {

    const [darkMode, setDarkMode] = React.useState(false)
    const [searchText, setSearchText] = React.useState("")
    const [notes, setNotes] = React.useState([
        // {
        //     id: nanoid(),
        //     text: "This is my first Note",
        //     date: "04/02/23"
        // },
        // {
        //     id: nanoid(),
        //     text: "This is my Second Note",
        //     date: "07/02/23"
        // },
        // {
        //     id: nanoid(),
        //     text: "This is my Third Note",
        //     date: "10/02/23"
        // }
    ])

    React.useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('react-app-store-data'))
        if(savedData) {
            setNotes(savedData)
        }
    }, [])
    React.useEffect(() => {
        localStorage.setItem('react-app-store-data', JSON.stringify(notes))
    }, [notes])

    function newNote(text) {
        const date = new Date()
        setNotes(prevState => [...prevState, {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }])
    }

    function handleSearch(returnedSearchText) {
        setSearchText(returnedSearchText)
    }

    function handleDelete(id) {
        setNotes(prevState => prevState.filter(value => value.id !== id))
    }

    function handleDarkMode() {
        setDarkMode(() => !darkMode)
        console.log(darkMode)
    }
    return(
        <div className={`full--body${darkMode ? "--dark" : ""}`}>
            <div className="container">

                <Header dm={handleDarkMode}/>

                <SearchNote search={handleSearch}/>

                <NotesList notes={notes.filter(value => value.text.toLowerCase().includes(searchText))}
                           newNote={newNote}
                           delete={handleDelete}/>

            </div>
        </div>
    )
}
