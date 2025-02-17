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
function PageNumber({ showPageNumberInput, setShowPageNumberInput, index, notes, setPageNumber }) {

  //const [comment, setComment] = useState('')
  //const [comments, setComments] = useState([])
  const [noteId, setNoteId] = useState('')
  const [number, setNumber] =  useState('')

  function storePageNumberAndHideInput() {
    setNoteId(notes[index].note_id)  
    setPageNumber(number)
    savePageNumber()
    document.getElementById('pagenumber-input').value=""
    setShowPageNumberInput(!showPageNumberInput)
  }

  const savePageNumber = async() => {
    let noteId = notes[index].note_id
    console.log(noteId, number)
    try {
      const response = await axios.put(`http://localhost:4001/books/addpagenumber`, {
        pageNumber: number,
        noteId: noteId,
      })
      console.log(response.data)
    } catch(error) {
      console.error("error posting note", error)
    }
  }
  //id="isbn-search" 
 // label="Enter ISBN" 
  //type="search" 
  return (
    <>
      <Stack spacing={2}>
          <TextField
            style={{fontStyle: 'Normal', marginTop: 13, marginBottom: 0}}
          id="pagenumber-input"
          label="Enter Page Number"
          type="search"
          rows={4}
          defaultValue=""
          onChange={e=>setNumber(e.target.value)}
        />
        <Button
        style={{backgroundColor: '#E3D026',
          color: '#242105', marginBottom: 10
        }}
        variant="contained" 
        onClick={()=>{
          storePageNumberAndHideInput()
        }}>
        save page number
        </Button>
      </Stack>
    </>
  )
}

export default PageNumber