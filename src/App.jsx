import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book.jsx'
import Notes from './Notes.jsx'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [count, setCount] = useState(0)
  const getBookDetails = async(apiKey) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${9781796433401}=isbn&key=${apiKey}`
  )
  const data = await response.json()
  console.log(data)
}
getBookDetails()
  return (
    <>
      <h4>Book Notes</h4>
      <Book />
      <Notes />
    </>
  )
}

export default App
