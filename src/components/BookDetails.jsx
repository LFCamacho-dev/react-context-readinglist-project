import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export const BookDetails = ({book}) => {

    const { dispatch } = useContext(BookContext)

    return (
        <li onDoubleClick={() => {
            dispatch({
                type: "REMOVE_BOOK",
                id: book.id}
            )}}>
            <div className='title'>{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    )
}
