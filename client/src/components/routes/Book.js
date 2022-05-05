import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'


function Book() {
  const [book, setBook] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams();
  let navigate = useNavigate();

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3000/api/books/${id}`)
        console.log(response)
        const result = response.data.book
        setBook(result)
      
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {
    if (!book) {
      return <p>Loading...</p>
    }
  }, [book])

  const destroy = () => {
   axios({
      url: `http://localhost:3000/api/books/${id}`,
      method: 'DELETE'
    }).then(() => setDeleted(true)).catch(console.error)
  }

  useEffect(() => {
    if (deleted) {
      return navigate("/")
    }
  }, [deleted, navigate])

  

  return (
    <Layout>
            
      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Genres: {book.genres}</p>
      <p>ISBN: {book.ISBN}</p>
      <img src={book.imageLink} alt="" width="100px"/>

      <NavLink to={`/books/${id}/edit`} >
        <button>Edit</button>
      </NavLink>

      <button onClick={() => destroy()} >Delete Book</button>


      <NavLink to={"/books"}>Back to all books</NavLink>
      
    </Layout>
  )
}

export default Book