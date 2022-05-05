
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../shared/Layout"
import BookForm from "../shared/BookForm"
import axios from "axios";

function BookEdit () {

    const navigate = useNavigate()
    const {id} = useParams() // extracting the id from the object of whatever url page I am currently in
    const [book, setBook] = useState({
        title: '',
        author: "",
        year: "",
        genres: [""],
        ISBN: "",
        imageLink: ""
    })
    // check if it is updated
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios(`http://localhost:3000/api/books/${id}`)
                console.log(response.data)
                setBook(response.data.book)
            }catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [id])
    const handleChange = (event) => {
        console.log(book)
        const editedItem = { ...book, [event.target.name]: event.target.value}
        // // grab the value from the user input form
        // const updatedField = { [event.target.name]: event.target.value}
        // // assign the empty state above with the updated field into one object
        // const editedItem = Object.assign(item, updatedField)
        setBook(editedItem)

    }
    const handleSubmit = (event) => {
        event.preventDefault() // submit only once its ready to submit
        axios({
            url: `http://localhost:3000/api/books/${id}`,
            method: "PUT",
            data: book
        })
        .then(() => setUpdated(true))
        .catch(console.error)

    }
    
    // if I modify the item, the change will first reflect in the local state, then
    // it will be sent ot the database where the databse saves the changes

    useEffect(() => {
        if(updated){
            return navigate(`/books/${id}`)
        }
    })

    console.log(book)
    // console.log(setItem)
    console.log(updated)
    console.log(setUpdated)

    return(
        <Layout>
            <BookForm
                book={book}
                handleChange={(e) => handleChange(e)}
                handleSubmit={(e) => handleSubmit(e)}
                cancelPath={`/books/${id}`}

            />
        </Layout>
    )
}
export default BookEdit