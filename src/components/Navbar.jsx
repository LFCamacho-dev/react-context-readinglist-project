import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export const Navbar = () => {

    const { books } = useContext(BookContext)

  return (
    <div className='navbar'>
        <h1>Reading List</h1>
        <p>Currently you have <em>{books.length}</em> books to get through...</p>
    </div>
  )
}
