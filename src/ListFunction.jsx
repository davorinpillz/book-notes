import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListFunction( {books} ) {
    
    function booksValues () {
    let booksValues = []

    books.forEach((object) =>{
        booksValues.push(object.title, object.author)
      })
      console.log(booksValues)
      let booksArray = []
      for (let i = 0; i <= booksValues.length; i=i+2) {
        booksArray.push(booksValues[i] + ' ' + booksValues[i+1])
      }
      console.log(booksArray)}
  return (
    <>
    </>
  )
}

export default ListFunction