import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Comment from './Comment.jsx'
import axios from 'axios'

function AddComments({ index, notes, showCommentInput, setShowCommentInput, comment, setComment, comments, setComments, commentIndex, setCommentIndex, commentUpdated, setCommentUpdated, collapseComment, setCollapseComment}) {

  //const [comment, setComment] = useState('')
  //const [comments, setComments] = useState([])
  const [text, setText] = useState('')
  const [noteId, setNoteId] = useState('')

  function storeCommentAndHideInput() {
    setComment(text)
    saveComment()
    setCommentIndex(index)
    setNoteId(notes[index].note_id)
    document.getElementById('comment-input').value=""
    setShowCommentInput(!showCommentInput)
    setCommentUpdated(!commentUpdated)
    setCollapseComment(!collapseComment)
  }
  const saveComment = async() => {
    let noteId = notes[index].note_id
    let bookId = notes[index].book_id
    try {
      const response = await axios.post(`http://localhost:4001/books/addcomment`, {
        comment: text,
        noteId: noteId,
        bookId: bookId,
        time_created: new Date()
      })
      console.log(response.data)
    } catch(error) {
      console.error("error posting note", error)
    }
  }

  console.log(comments)
  return (
    <>
      <Stack spacing={2}>
          <TextField
            style={{marginTop: 13, marginBottom: 0}}
          id="comment-input"
          label="Enter Comment"
          multiline
          rows={4}
          defaultValue=""
          onChange={e=>setText(e.target.value)}
        />
        <Button
        style={{backgroundColor: '#E3D026',
          color: '#242105', marginBottom: 10
        }}
        variant="contained" 
        onClick={()=>{
          storeCommentAndHideInput()
        }}>
        add comment
        </Button>
      </Stack>
    </>
  )
}

export default AddComments