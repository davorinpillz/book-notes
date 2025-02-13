import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PinIcon from '@mui/icons-material/Pin';
import NotesIcon from '@mui/icons-material/Notes';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Comments from './Comments.jsx'

function NoteCard({ note, index }) {
const [showElement, setShowElement] = useState(false)
    return (
        <Stack 
            spacing={2}>
            <Paper 
                style={{width: 300, padding: 12}}
                spacing={2}
                key={index}>
                <Stack>    
                    {note}
                    {showElement ? <Comments showElement={showElement} setShowElement={setShowElement}/> : <br></br>}
                    <Stack 
                        direction="row"
                        style={{marginTop: 10, marginBottom: 0, justifyContent: 'center'}}
                    >
                        <Tooltip title="Add chapter title" arrow>
                            <AutoStoriesIcon 
                                style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                            />
                        </Tooltip>
                        <Tooltip title="Add page number" arrow>
                            <PinIcon
                                style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                            />
                        </Tooltip>
                        <Tooltip title="Add comment" arrow>
                            <NotesIcon
                                id="comment"
                                style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                                onClick={()=>setShowElement(!showElement)}
                            />
                        </Tooltip>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default NoteCard