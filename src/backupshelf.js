import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import Chance from 'chance';
import axios from 'axios'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const chance = new Chance(42);



const columns = [
  {
    width: 100,
    label: 'Title',
    dataKey: 'title',
  },
  {
    width: 100,
    label: 'Author',
    dataKey: 'author',
  },
  {
    width: 5,
    label: '',
    dataKey: ''
  },


];


const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width, fontWeight: "bold", fontSize: 15 }}
          sx={{ backgroundColor: 'background.paper' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment
    >
      
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          
          {row[column.dataKey]}
          
        </TableCell>
        
      ))}

    </React.Fragment>
    
  );
}


function Shelf() {
  const [books, setBooks] = useState({})
useEffect(() => {
  const getBooks = async () => {
  try {
    const response = await axios.get('http://localhost:4001/books/all')
    const result = await response
    setBooks(result.data.flat())
  } catch(error) {
    console.log('Error:', error)
  }
};
getBooks();}, [])


  return (
    <Paper style={{ height: 400, width: '100%', marginBottom: 20 }}
    spacing={2}>
          <TableVirtuoso
         data={books} 
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  )
}

export default Shelf

let booksValues = []
books.forEach((object) =>{
    booksValues.push(object.title, object.author)
  })
  console.log(booksValues)
  let booksArray = []
  for (let i = 0; i <= booksValues.length; i=i+2) {
    booksArray.push(booksValues[i] + ' ' + booksValues[i+1])
  }
  console.log(booksArray)



  //
  import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


function Shelf() {

  const [books, setBooks] = useState({})
  const [booksValues, setBooksValues] = useState([])
useEffect(() => {
  const getBooks = async () => {
  try {
    const response = await axios.get('http://localhost:4001/books/all')
    const result = await response
    await setBooks(result.data.flat())
    await booksValuesFunction(result.data.flat())
  } catch(error) {
    console.log('Error:', error)
  }
};
getBooks();}, [])

function booksValuesFunction (books) {

  books.forEach((object) =>{
      booksValues.push(object.title, object.author)
    })
    let booksArray = []
    let halfBooksArray = []
    for (let i = 0; i < booksValues.length; i=i+2) {
      booksArray.push(booksValues[i] + ' - ' + booksValues[i+1])
    }
    for (let i = 0; i < (booksArray.length/2); i++) {
      halfBooksArray.push(booksArray[i])
    }
    booksArray = []
    console.log(halfBooksArray)
  setBooksValues(halfBooksArray)}

console.log(books)
    console.log(booksValues)


function renderRow(props) {
  const { index, style } = props;
  return (
    
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${booksValues[index + 1]}`} />
      </ListItemButton>
    </ListItem>
  );
}
  return (
    <Paper
      sx={{ width: '100%', height: 300, width: 'auto', bgcolor: 'background.paper', marginBottom: 2.5 }}
    >
      <FixedSizeList
        height={300}
        width='auto'
        itemSize={75}
        itemCount={booksValues.length - 1}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Paper>
  )
}

export default Shelf


let booksArray = []
let idRow = []
let titleRow = []
let authorRow = []



function booksValuesFunction (books) {
  books.forEach((object) => {
    pushToRow(Object.entries(object))
  })
}
function pushToRow (entry) {
  idRow.push(entry[0])
  titleRow.push(entry[1])
  authorRow.push(entry[2])}

  function runFunctions(books) {
    booksValuesFunction(books)
  
    console.log(idRow, titleRow, authorRow)
    
  }