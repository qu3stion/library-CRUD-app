import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/routes/Home';
import Book from "./components/routes/Book.js"
import Books from "./components/routes/Books.js"
import BookCreate from "./components/routes/BookCreate.js"
import BookEdit from "./components/routes/BookEdit.js"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h3>{location.state ? location.state.message: null }</h3>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/create-book' element={<BookCreate />} /> 
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/:id/edit' element={<BookEdit />} /> 

      </Routes>

    </div>
  );
}


export default App;