import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function PageNumber({ pageNumber, setPageNumber, showPageNumberInput, setShowPageNumberInput }) {

  //const [comment, setComment] = useState('')
  //const [comments, setComments] = useState([])

  function storePageNumberAndHideInput() {
    setPageNumber(pageNumber)
    document.getElementById('pagenumber-input').value=""
    setShowPageNumberInput(!showPageNumberInput)
  }
  //id="isbn-search" 
 // label="Enter ISBN" 
  //type="search" 
  return (
    <>
      <Stack spacing={2}>
          <TextField
            style={{fontStyle: 'Normal', marginTop: 13, marginBottom: 0}}
          id="pagenumber-input"
          label="Enter Page Number"
          type="search"
          rows={4}
          defaultValue=""
          onChange={e=>setPageNumber(e.target.value)}
        />
        <Button
        style={{backgroundColor: '#E3D026',
          color: '#242105', marginBottom: 10
        }}
        variant="contained" 
        onClick={()=>{
          storePageNumberAndHideInput()
        }}>
        save page number
        </Button>
      </Stack>
    </>
  )
}

export default PageNumber