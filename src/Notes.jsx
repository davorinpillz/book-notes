import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NoteCard from './NoteCard.jsx'
import axios from 'axios'
import ExistingNotes from './ExistingNotes.jsx'

function Notes({shelfBook, shelfBookNotes, bookSelected, bookIsbn, setBookIsbn}) {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])
  const [isbn, setIsbn] = useState([])
  const [existingNotes, setExistingNotes] = useState([])
  const [addedNote, setAddedNote] = useState(false)
  const [addedTitle, setAddedTitle] = useState('')
  let bookNotes = []
  for (let i = 0; i < shelfBookNotes.length; i++) {
    bookNotes.push(shelfBookNotes[i].note)
  }

  useEffect(() => {
    setIsbn(shelfBook.isbn)
    setNotes([...notes, ...bookNotes])
    
  }, [])

const saveNote = async() => {
    try {
      const response = await axios.post(`http://localhost:4001/books/:${isbn}/addnote`, {
        book_id: shelfBook.isbn,
        note: note,
      })
      console.log(response.data)
    } catch(error) {
      console.error("error posting note", error)
    }
    window.alert("Note saved")
    setAddedNote(!addedNote)
  }

  const addNote = () => {
    setNotes([...notes, note])
    document.getElementById('note').value=""
    saveNote()
  }

  return (
    <Stack 
      spacing={2}
      style={{maxWidth: 'auto'}}>
        <TextField
          id="note"
          label="Enter Text"
          multiline
          rows={4}
          defaultValue=""
          onChange={e=>setNote(e.target.value)}
        />
        <Button
          style={{backgroundColor: '#E3D026',
            color: '#242105'
          }}
          variant="contained" 
          onClick={addNote}>
          add note
        </Button>
        <ExistingNotes isbn={isbn} addedNote={addedNote} setAddedNote={setAddedNote}/>

      </Stack>
  )
}

export default Notes

/*        {notes.map((note, index) => {
          return (
            <NoteCard note={note} index={index} notes={notes} shelfBookNotes={shelfBookNotes} addedNote={addedNote}/>
          )
        })}
          */