import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios'
import { create } from 'zustand'

function ChapterTitle({ index, chapterTitle, setChapterTitle, showChapterTitleInput, setShowChapterTitleInput, notes }) {

  //const [comment, setComment] = useState('')
  //const [comments, setComments] = useState([])

  const [title, setTitle] = useState('')
  const [noteId, setNoteId] = useState('')

  function storeTitleAndHideInput() {
    setTitle(chapterTitle)
    setChapterTitle(title)
    saveTitle()
    setNoteId(notes[index].note_id)
    document.getElementById('chaptertitle-input').value=""
    setShowChapterTitleInput(!showChapterTitleInput)
  }
  useEffect(() => {

  }, )
  const saveTitle = async() => {
    let noteId = notes[index].note_id
    console.log(noteId, title)
    try {
      const response = await axios.put(`http://localhost:4001/books/addtitle`, {
        title: title,
        noteId: noteId,
      })
      console.log(response.data)
    } catch(error) {
      console.error("error posting note", error)
    }
  }
console.log(index, notes, noteId)
console.log(notes[index].note_id)


  return (
    <>
      <Stack spacing={2}>
          <TextField
            style={{fontStyle: 'Normal', marginTop: 13, marginBottom: 0}}
          id="chaptertitle-input"
          label="Enter Chapter Title"
          type="search"
          rows={4}
          defaultValue=""
          onChange={e=>setTitle(e.target.value)}
        />
        <Button
        style={{backgroundColor: '#E3D026',
          color: '#242105', marginBottom: 10
        }}
        variant="contained" 
        onClick={()=>{
          storeTitleAndHideInput(index)
        }}>
        add chapter title
        </Button>
      </Stack>
    </>
  )
}

export default ChapterTitle