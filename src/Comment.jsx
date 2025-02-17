import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divider from '@mui/material/Divider';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
function Comment( {comments, setCommentUpdated, date} ) {
  let commentsArray = []
  for (let i = 0; i < comments.length; i++) {
    commentsArray.push(comments[i].comment)
  }

  return (
    <>
      <Divider 
        style={{marginTop: 15, color: "#fafaf7" }}
      />
      {commentsArray.map((comment) => {
        return (
          <p
          style={{ marginBottom: 0, fontStyle: 'normal', fontSize: 16}}

          ><p style={{ marginBottom: 0, fontStyle: 'normal', fontSize: 8, color: "gray"}}></p>{comment}
          <Divider
            style={{marginTop: 15}}
          /></p>
        )
      })}
    </>
  )
}

export default Comment