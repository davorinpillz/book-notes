import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ChapterTitle({ chapterTitle, setChapterTitle, showChapterTitleInput, setShowChapterTitleInput }) {

  //const [comment, setComment] = useState('')
  //const [comments, setComments] = useState([])

  function storeTitleAndHideInput() {
    setChapterTitle(chapterTitle)
    document.getElementById('chaptertitle-input').value=""
    setShowChapterTitleInput(!showChapterTitleInput)
  }
 
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
          onChange={e=>setChapterTitle(e.target.value)}
        />
        <Button
        style={{backgroundColor: '#E3D026',
          color: '#242105', marginBottom: 10
        }}
        variant="contained" 
        onClick={()=>{
          storeTitleAndHideInput()
        }}>
        add chapter title
        </Button>
      </Stack>
    </>
  )
}

export default ChapterTitle