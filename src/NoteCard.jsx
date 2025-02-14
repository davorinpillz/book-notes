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
import AddComments from './AddComments.jsx'
import Comment from './Comment.jsx'
import PageNumber from './PageNumber.jsx'
import ChapterTitle from './ChapterTitle.jsx'

function NoteCard({ note, index }) {

const [showCommentInput, setShowCommentInput] = useState(false)
const [showPageNumberInput, setShowPageNumberInput] = useState(false)
const [showChapterTitleInput, setShowChapterTitleInput] = useState(false)

const [comment, setComment] = useState('')
const [comments, setComments] = useState([])
const [chapterTitle, setChapterTitle] = useState('')
const [pageNumber, setPageNumber] = useState('')
console.log(pageNumber)
    return (
        <Stack 
            spacing={2}
            style={{width: "100%"}}>
            <Paper 
                style={{ padding: 12}}
                spacing={2}
                key={index}>
                <Stack>    
                    <div style={{fontStyle: 'oblique', fontSize: 20}}>
                    <div>
                        <p
                        style={{fontSize: 16, fontStyle: 'Normal', fontWeight: '500'}}>{chapterTitle}</p>
                        {showChapterTitleInput ? <ChapterTitle chapterTitle={chapterTitle} setChapterTitle={setChapterTitle}
                        showChapterTitleInput={showChapterTitleInput}
                        setShowChapterTitleInput={setShowChapterTitleInput}/> : <p></p>}
                    </div>
                    {note}
                        <div>
                        <p
                        style={{fontSize: 12, fontStyle: 'Normal'}}>{pageNumber}</p>
                        {showPageNumberInput ? <PageNumber pageNumber={pageNumber} setPageNumber={setPageNumber}
                        showPageNumberInput={showPageNumberInput}
                        setShowPageNumberInput={setShowPageNumberInput}/> : <p></p>}
                        </div>
                    </div>
                    <Comment comments={comments}/>
                    {showCommentInput ? <AddComments showCommentInput={showCommentInput} setShowCommentInput={setShowCommentInput}
                    comment={comment} setComment={setComment}
                    comments={comments} setComments={setComments}
                    chapterTitle={chapterTitle} setChapterTitle={setChapterTitle}
                    showChapterTitleInput={showChapterTitleInput}
                    setShowChapterTitleInput={setShowChapterTitleInput}
                    /> : <br></br>}
                    <Stack 
                        direction="row"
                        style={{marginTop: 0, marginBottom: 0, justifyContent: 'center'}}
                    >
                        <Tooltip title="Add chapter title" arrow>
                            <AutoStoriesIcon 
                                style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                                onClick={()=>setShowChapterTitleInput(!showChapterTitleInput)}
                            />
                        </Tooltip>
                        <Tooltip title="Add page number" arrow>
                            <PinIcon
                                style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                                onClick={()=>setShowPageNumberInput(!showPageNumberInput)}
                            />
                        </Tooltip>
                        <Tooltip title="Add comment" arrow>
                            <NotesIcon
                                id="comment"
                                style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                                onClick={()=>setShowCommentInput(!showCommentInput)}
                            />
                        </Tooltip>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default NoteCard