import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Comment from './Comment.jsx'

function Comments({ showElement, setShowElement }) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  console.log(comments)

  function storeCommentAndHideInput() {
    setComments([...comments, comment])
    document.getElementById('comment-input').value=""
    setShowElement(!showElement)
  }

  return (
    <>
      <Stack spacing={2}>
        <Divider style={{marginTop: 13}}/>
        {comments.map((comment, index) => {
          return (
            <Comment comment={comment} index={index}/>
          )
        })}
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
          color: '#242105'
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

export default Comments