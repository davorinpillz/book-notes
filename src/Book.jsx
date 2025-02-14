import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

function Book( {bookData, displayTable, shelfBook} ) {
  const [count, setCount] = useState(0)
  console.log(bookData)
  return (
    <Stack>
    <Paper 
      style={{ padding: 12, marginBottom: 20}}
      spacing={2}
    >
    <Typography variant="h6">{shelfBook.title}</Typography>
    <Typography variant="subtitle2">{shelfBook.author}</Typography>

    <Divider 
      style={{marginBottom: 5, color: "#fafaf7", marginTop: 10 }}
    />
    <Stack direction="row"
      style={{marginTop: 0, marginBottom: 0, justifyContent: 'center'}}
    >
      <Tooltip title="Back to collection" arrow>
      <KeyboardReturnIcon 
        style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
        onClick={displayTable}
      />
    </Tooltip>
    </Stack>
    </Paper>
    </Stack>
  )
}

export default Book

