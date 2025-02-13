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

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [isbn, setIsbn] = useState('')
  const [bookInfo, setBookInfo] = useState({})
  const [viewShelf, setViewShelf] = useState(false)
  const getBookDetails = async(apiKey) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyB3gJ000xrR9_kYY7Dv7I7Vk6uU7mkOdyE`
  )
  const bookInfo = await response.json()
  setBookInfo(bookInfo)
  console.log(bookInfo)
}

function searchIsbn(e) {
  setIsbn(e.target.value)
  getBookDetails()
  document.getElementById('isbn-search').value=""
}

function displayList() {
  setViewShelf(!viewShelf)
}

function addToCollection() {
  console.log("clicked")
}

  return (
    <Stack>
      {viewShelf ? <Shelf /> : <></>}
      {bookInfo.totalItems > 0 ?
      <Stack>
        <Paper 
                style={{ padding: 12, marginBottom: 20}}
                spacing={2}
                >
      <Typography variant="h6">{bookInfo.items[0].volumeInfo.title}</Typography>
      <Typography variant="subtitle2">{bookInfo.items[0].volumeInfo.subtitle}</Typography>
      <Typography variant="subtitle1">{bookInfo.items[0].volumeInfo.authors}</Typography>
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
/>
</Tooltip>
        </Stack>
      </Paper>

      </Stack>: <></>}
      
      <TextField
                id="isbn-search" 
                label="Enter ISBN" 
                type="search" 
                onChange={e=>setIsbn(e.target.value)}
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
        onClick={displayList}>
        view collection
        </Button>
     <Notes />
    </Stack>
  )
}

export default App

//<Notes />
