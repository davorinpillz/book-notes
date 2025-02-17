import { useState, useEffect } from 'react'
import './App.css'
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Book from './Book.jsx'

import { DataGrid, useGridApiEventHandler, useGridApiContext } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'author', headerName: 'Author', width: 150 },
];

const paginationModel = { page: 0, pageSize: 5 };

function Shelf({bookSelected, setBookSelected, viewShelf, setViewShelf, shelfBook, setShelfBook, shelfBookNotes, setShelfBookNotes}) {
  const [rows, setRows] = useState([])
  const [message, setMessage] = React.useState('');


useEffect(() => {
  const getBooks = async () => {
  try {
    await axios
      .get('http://localhost:4001/books/all')
      .then((res)=> setRows(res.data.flat()))
  } catch(error) {
    console.log('Error:', error)
  }
};
getBooks();}, [])

const handleRowClick = (params) => {
  setMessage(`Movie "${params.row.title}" clicked`);
  setBookSelected(!bookSelected)
  setViewShelf(!viewShelf)
  setShelfBook(params.row)
};
  return (
    <Paper
      sx={{ width: '100%', height: '369px', width: '379x', bgcolor: 'background.paper', marginBottom: 2.5, fontSize: 10 }}
    > 
      <DataGrid
        onRowClick={handleRowClick}
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0, fontSize: 12}}
      />

    </Paper>
  )
}

export default Shelf