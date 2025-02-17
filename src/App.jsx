import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book.jsx'
import Notes from './Notes.jsx'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Shelf from './Shelf.jsx'
import axios from 'axios'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [isbn, setIsbn] = useState('')
  const [bookData, setBookData] = useState({})
  const [shelfBook, setShelfBook] = useState([])
  const [viewShelf, setViewShelf] = useState(false)
  const [bookSelected, setBookSelected] = useState(false)
  const [shelfBookNotes, setShelfBookNotes] = useState([])
  const [noteIsbn, setNoteIsbn] = useState('')
  const getBookDetails = async(apiKey) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyB3gJ000xrR9_kYY7Dv7I7Vk6uU7mkOdyE`
  )
  const bookData = await response.json()
  setBookData(bookData)
  console.log(bookData)
}
function searchIsbn(e) {
  setIsbn(e.target.value)
  getBookDetails()
  {viewShelf ? setViewShelf(!viewShelf) : <></>}
  document.getElementById('isbn-search').value=""
}


function displayTable() {

  if (bookSelected) {
    setBookSelected(!bookSelected)
  }
  setViewShelf(!viewShelf)
}
let addedBook = {}
const [addBook, setAddBook] = useState({})
const addToCollection = async(event) => {
  event.preventDefault()
  try {
    const response = await axios.post("http://localhost:4001/books/create", {
      author: bookData.items[0].volumeInfo.authors[0],
      title: bookData.items[0].volumeInfo.title,
      isbn: bookData.items[0].volumeInfo.industryIdentifiers[1].identifier,
      category: bookData.items[0].volumeInfo.categories[0],
      publishedDate: bookData.items[0].volumeInfo.publishedDate,
      subtitle: bookData.items[0].volumeInfo.subtitle,
    })
    addedBook = response.data
    console.log(response.data)
  } catch(error) {
    console.error("error posting data", error)
  }
  setBookData('')
  window.alert("Book added to collection")
}
function cancel() {
  setBookData('')
}
console.log(shelfBook)
  return (
    <Stack
    style={{display: 'flex', minWidth: '375px'}}>
      {bookSelected ? <Book shelfBook={shelfBook} displayTable={displayTable} />: <></>}
      {viewShelf ? <Shelf shelfBook={shelfBook} setShelfBook={setShelfBook} setViewShelf={setViewShelf} viewShelf={viewShelf} bookSelected={bookSelected} setBookSelected={setBookSelected}
      bookData={bookData} setBookData={setBookData} setShelfBookNotes={setShelfBookNotes}/> : <></>}
      {bookData.totalItems > 0 ?
      <Stack>
        <Paper 
        style={{ padding: 12, marginBottom: 20}}
        spacing={2}
        >
      <Typography variant="h6">{bookData.items[0].volumeInfo.title}</Typography>
      <Typography variant="subtitle2">{bookData.items[0].volumeInfo.subtitle}</Typography>
      <Typography variant="subtitle1">{bookData.items[0].volumeInfo.authors}</Typography>
      <Divider 
        style={{marginBottom: 5, color: "#fafaf7", marginTop: 10 }}
        />
      <Stack direction="row"
        style={{marginTop: 0, marginBottom: 0, justifyContent: 'center'}}
        >
        <Tooltip title="Add to collection" arrow>
      <LibraryAddIcon
        style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
        onClick={addToCollection}>
        </LibraryAddIcon>
        </Tooltip>
        <Tooltip title="Cancel" arrow>
        <NotInterestedIcon
          style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
          onClick={cancel}
        />
      </Tooltip>
        </Stack>
      </Paper>
      </Stack>: <></>}
      <TextField
        id="isbn-search" 
        label="Enter ISBN" 
        type="search" 
        onChange={e=>setIsbn(e.target.value.replace(/\D/g, ""))}
      />
      <br></br>
      <Button
        style={{backgroundColor: '#E3D026',
          color: '#242105', marginBottom: 15, marginTop: -10
        }}
        variant="contained" 
        onClick={searchIsbn}>
        search isbn
      </Button>
      <Button
        style={{backgroundColor: '#E3D026',
          color: '#242105', marginBottom: 15, marginTop: 5
        }}
        variant="contained" 
        onClick={displayTable}>
        view collection
        </Button>
        {bookSelected ? <Notes  bookSelected={bookSelected} shelfBook={shelfBook} shelfBookNotes={shelfBookNotes} setShelfBookNotes={setShelfBookNotes}/>: <></>}
    </Stack>
  )
}

export default App

