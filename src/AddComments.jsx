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

function AddComments({ showCommentInput, setShowCommentInput, comment, setComment, comments, setComments, chapterTitle, setChapterTitle, pageNumber, setPageNumber, showPageNumberInput, setShowPageNumberInput, showChapterTitleInput, setShowChapterTitleInput }) {

  //const [comment, setComment] = useState('')
  //const [comments, setComments] = useState([])

  function storeCommentAndHideInput() {
    setComments([...comments, comment])
    document.getElementById('comment-input').value=""
    setShowCommentInput(!showCommentInput)
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
          onChange={e=>setComment(e.target.value)}
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