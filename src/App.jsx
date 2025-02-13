import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book.jsx'
import Notes from './Notes.jsx'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [isbn, setIsbn] = useState('')
  const getBookDetails = async(apiKey) => {
  const response = await fetch(
    `http://openlibrary.org/api/volumes/brief/isbn/${9781526620293}.json`
  )
  const bookInfo = await response.json()
  console.log(bookInfo)
}
getBookDetails()
  return (
    <Stack>
      <Book bookInfo={bookInfo}/>
      <TextField
                id="isbn-search" 
                label="Enter ISBN" 
                type="search" 
                onChange={e=>setIsbn(e.target.value)}
              />
              <br></br>
      <Notes />
    </Stack>
  )
}

export default App
