import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Book( {bookInfo} ) {
  const [count, setCount] = useState(0)
  console.log(bookInfo)
  return (
    <>
      <p>{bookInfo.items[0].volumeInfo.title}</p>
    </>
  )
}

export default Book