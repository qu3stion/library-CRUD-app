import { Link } from 'react-router-dom'

const BookForm = ({book, handleSubmit, handleChange, cancelPath}) => {

    return(
        
        <form onSubmit={(e) => handleSubmit(e)}>

            <label>Title</label>
            <input
            placeholder="Title of Book"
            defaultValue={book.title}
            name="title"
            onChange={(e) => handleChange(e)} />

            <input
            placeholder="Dr.Seuss"
            defaultValue={book.author}
            name="author"
            onChange={(e) => handleChange(e)} />

            <input
            placeholder="2005"
            defaultValue={book.year}
            name="year"
            onChange={(e) => handleChange(e)} />

            <input
            placeholder="childrens book"
            defaultValue={book.genres}
            name="genres"
            onChange={(e) => handleChange(e)} />   

            <input
            placeholder="123456789"
            defaultValue={book.ISBN}
            name="ISBN"
            onChange={(e) => handleChange(e)} /> 

            <input
            placeholder="https://coollink.co"
            defaultValue={book.imageLink}
            name="imageLink"
            onChange={(e) => handleChange(e)} />  



            <button type="submit">Submit</button>
            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>
        </form>
    )
}
export default BookForm