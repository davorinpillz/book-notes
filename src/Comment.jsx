import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divider from '@mui/material/Divider';

function Comment( {comments} ) {

  return (
    <>
      <Divider 
        style={{marginTop: 15, color: "#fafaf7" }}
      />
      {comments.map((comment) => {
        return (
          <p
          style={{ marginBottom: 0, fontStyle: 'normal', fontSize: 16}}

          >{comment}
          <Divider
            style={{marginTop: 15}}
          /></p>
        )
      })}
    </>
  )
}

export default Comment