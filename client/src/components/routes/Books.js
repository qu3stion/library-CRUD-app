import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Nav from '../shared/Nav';
import axios from 'axios';

function Books() {
  const [books, setBooks] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios('http://localhost:3000/api/books')
      console.log(response)
      setBooks(response.data.books)

    } catch (error) {
      console.error(error)
    }
  }



  const booksData = books.map((book) => {

    return (
      <li key={book._id}>
      <NavLink to={`/books/${book._id}`} >{book.title}</NavLink>
    </li>
    )
  })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h4>Books</h4>
      <Nav/>
      <ul>
        {booksData}
      </ul>
  </div>
)
}
export default Books