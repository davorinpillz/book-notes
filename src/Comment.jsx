import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divider from '@mui/material/Divider';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import Typography from '@mui/material/Typography';

function Comment( {comments, setCommentUpdated, date, noteId} ) {

  return (
    <>
      <Divider 
        style={{marginTop: 15, color: "#fafaf7" }}
      />
      {comments.map((comment) => {
        return (
          <p
          style={{ marginBottom: 0, fontStyle: 'normal', fontSize: 16}}

          >
      <Typography style={{ marginBottom: 0, fontStyle: 'normal', fontSize: 8, color: "gray"}}
      variant="subtitle1">{comment.time_created}</Typography>
      <p style={{ marginBottom: 0, fontStyle: 'normal', fontSize: 8, color: "gray"}}></p>{comment.comment}
          <Divider
            style={{marginTop: 15}}
          /></p>
        )
      })}
    </>
  )
}

export default Comment