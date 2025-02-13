import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Book( {bookInfo} ) {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Book Card</p>
    </>
  )
}

export default Book