import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paper from '@mui/material/Paper';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LinkIcon from '@mui/icons-material/Link';
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
import axios from 'axios'
import { useReferencesStore } from './References.js'
import { WindowSharp } from '@mui/icons-material';

function NoteCard({ note, index, notes, isbn, addedNote}) {

const [showCommentInput, setShowCommentInput] = useState(false)
const [showPageNumberInput, setShowPageNumberInput] = useState(false)
const [showChapterTitleInput, setShowChapterTitleInput] = useState(false)

const [comment, setComment] = useState('')
const [comments, setComments] = useState([])
const [chapterTitle, setChapterTitle] = useState('')
const [pageNumber, setPageNumber] = useState('')
const [commentIndex, setCommentIndex] = useState('')
const [commentUpdated, setCommentUpdated] = useState(false)
const [collapseComment, setCollapseComment] = useState(false)
const { addReference, deleteReference } = useReferencesStore()
//console.log(reference)
let refs = useReferencesStore((state) => state.references)
//console.log(selectIndex)
//console.log(notes)
//console.log(reference)
/*useEffect(() => {
    const postRef = async () => {
        console.log(counter)
    }
postRef()}, [])*/
let chapterTitles = []
for (let i = 0; i < notes.length; i++) {
    chapterTitles.push(notes[i].chapter_title)
  }
//console.log(index)
//console.log(chapterTitles)
let pageNumbers = []
for (let i = 0; i <notes.length; i++) {
    pageNumbers.push(notes[i].page_number)
}
//console.log(index)
let noteId = notes[index].note_id
//console.log(noteId)
useEffect(() => {
    const getComments = async () => {
    try {
      await axios
        .get(`http://localhost:4001/books/${noteId}/comments`)
        .then((res)=> setComments(res.data))
    } catch(error) {
      console.log('Error:', error)
    }
  };
  getComments();},[commentUpdated])

console.log(refs)

useEffect(() => {
    const postRef = async() => {
        try {
            const response = await axios.post(`http://localhost:4001/books/crossreference`, {
            first_note_id: refs[1].note_id,
          first_book_id: refs[1].book_id,
          first_book_chapter: refs[1].chapter_title,
          first_book_page_number: refs[1].page_number,
          second_note_id: refs[2].note_id,
          second_book_id: refs[2].book_id,
          second_book_chapter: refs[2].chapter_title,
          second_book_page_number: refs[2].page_number,
          comment: '',
          time_created: new Date().toLocaleString()
    
            })
            console.log(response.data)
          } catch(error) {
            console.error("error posting note", error)
          }

    }

    postRef()
}, [refs[2]])

  
    return (
        <Stack 
            spacing={2}
            style={{width: "100%"}}>
            <Paper 
                style={{ padding: 12}}
                spacing={2}
                key={index}>
                <Stack id={index}>    
                    <div style={{fontStyle: 'oblique', fontSize: 20}}>
                    <div>
                        <p
                        style={{fontSize: 16, fontStyle: 'Normal', fontWeight: '500'}}>{chapterTitles[index] ? <p>{chapterTitles[index]}</p> : <p>{chapterTitle}</p>}</p>
                        {showChapterTitleInput ? <ChapterTitle isbn={isbn} chapterTitle={chapterTitle} setChapterTitle={setChapterTitle}
                        showChapterTitleInput={showChapterTitleInput}
                        setShowChapterTitleInput={setShowChapterTitleInput}
                        index={index}
                        notes={notes}
                        /> : <p></p>}
                    </div>
                    {note}
                    
                        <div>
                        <p
                        style={{fontSize: 12, fontStyle: 'Normal', marginBottom: -25}}>{pageNumbers[index] ? <p>{pageNumbers[index]}</p> : <p>{pageNumber}</p>}</p>
                        {showPageNumberInput ? <PageNumber pageNumber={pageNumber} setPageNumber={setPageNumber}
                        showPageNumberInput={showPageNumberInput}
                        setShowPageNumberInput={setShowPageNumberInput}
                        index={index}
                        notes={notes}/> : <p></p>}
                        </div>
                    </div>
                    {showCommentInput ? <AddComments showCommentInput={showCommentInput} setShowCommentInput={setShowCommentInput}
                    comment={comment} setComment={setComment}
                    comments={comments} setComments={setComments}
                    chapterTitle={chapterTitle} setChapterTitle={setChapterTitle}
                    showChapterTitleInput={showChapterTitleInput}
                    setShowChapterTitleInput={setShowChapterTitleInput}
                    commentIndex={commentIndex}
                    setCommentIndex={setCommentIndex}
                    commentUpdated={commentUpdated} 
                    setCommentUpdated={setCommentUpdated}
                    setCollapseComment={setCollapseComment}
                    collapseComment={collapseComment}
                    index={index}
                    notes={notes}
                    /> : <br></br>}
                    {collapseComment ? <Comment comments={comments} />: <></> }
                    <Stack 
                        direction="row"
                        style={{marginTop: 10, marginBottom: 0, justifyContent: 'center'}}
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
                        {collapseComment ? 
                        <Tooltip title="Collapse comments" arrow>
                        <UnfoldLessIcon
                            id="collapse"
                            style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                            onClick={()=>setCollapseComment(!collapseComment)}
                        />
                    </Tooltip> : 
                    <Tooltip title="Show comments" arrow>
                    <UnfoldMoreIcon
                        id="collapse"
                        style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
                        onClick={()=>setCollapseComment(!collapseComment)}
                    />
                </Tooltip>}
                {refs.length < 2 ? <Tooltip title="Link note" arrow>
<LinkIcon
    id="Link note"
    style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
   onClick={() => {
    addReference({note_id: notes[index].note_id,
    book_id: notes[index].book_id,
    chapter_title: notes[index].chapter_title,
    page_number: notes[index].page_number,});
    window.alert("Note selected, choose note to reference in different book")
   }}
/>
</Tooltip> : refs.length == 2 ? <Tooltip title="Link note" arrow>
<LinkIcon
    id={index}
    style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
   onClick={() => {
    addReference({note_id: notes[index].note_id,
        book_id: notes[index].book_id,
        chapter_title: notes[index].chapter_title,
        page_number: notes[index].page_number,});
        window.alert("Cross-references saved")

   }}
/>
</Tooltip>
 : <></>
 }
                

                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default NoteCard

                   // <Comment comments={comments}/>
                    
//
/*<Tooltip title="Link note" arrow>
<LinkIcon
    id="Link note"
    style={{backgroundColor: 'white', color: 'gray', margin: '3px'}}
    onClick={()=>setShowCommentInput(!showCommentInput)}
/>
</Tooltip>*/