import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Comment( {comment, index} ) {

  return (
    <>
      <p>{comment}</p>
    </>
  )
}

export default Comment