import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import BookForm from "../shared/BookForm"

function BookCreate() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: "",
    year: "",
    genres: [""],
    ISBN: "",
    imageLink: ""
  })
  const [createdBook, setCreatedBook] = useState(null)

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name] : event.target.value }
    //assigned the empty state with the updatedField into one object
    const editedItem = Object.assign(book, updatedField)
    //assigned the new object to be updated to the state
    setBook(editedItem)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: `http://localhost:3000/api/books`,
      method: "POST",
      data: book
    }).then((res) => setCreatedBook(res.data.book)).catch(console.error)

  }

  useEffect(() => {
    if (createdBook) {
      return navigate(`/books`)
    }
  }, [createdBook, navigate])

  return (
    <Layout>
      <BookForm
        book={book}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'
      />
    </Layout>

  )
}

export default BookCreate