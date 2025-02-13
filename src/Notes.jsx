import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NoteCard from './NoteCard.jsx'

function Notes() {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])
  console.log(notes)
  return (
    <Stack 
      spacing={2}>
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
          onClick={()=>{
          setNotes([...notes, note])
          document.getElementById('note').value=""
        }}>
          add note
        </Button>
        {notes.map((note, index) => {
          return (
            <NoteCard note={note} index={index}/>
          )
        })}
      </Stack>
  )
}

export default Notes