import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NoteCard from './NoteCard.jsx'
import axios from 'axios'

function ExistingNotes({isbn, addedNote}) {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState({})
  const [existingIsbn, setExistingIsbn] = useState('')
  let bookNotes = []
  for (let i = 0; i < notes.length; i++) {
    bookNotes.push(notes[i].note)
  }
  let noteIds = []
  for (let i = 0; i < notes.length; i++) {
    noteIds.push(notes[i].note_id)
  }
//console.log(noteIds)
  useEffect(() => {
    setExistingIsbn(isbn)
    const getExistingNotes = async () => {
    try {
      await axios
        .get(`http://localhost:4001/books/${isbn}/notes`)
        .then((res)=> setNotes(res.data.flat()))
    } catch(error) {
      console.log('Error:', error)
    }
  };
  getExistingNotes();},[existingIsbn, addedNote])
  return (
    <Stack 
      spacing={2}
      style={{maxWidth: 'auto'}}>
        {bookNotes.map((note, index) => {
          return (
            <NoteCard note={note} index={index} notes={notes} />
          )
        })}
      </Stack>
  )
}

export default ExistingNotes