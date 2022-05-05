import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/books">Books</NavLink>
    <NavLink to="/create-book">Create Book</NavLink>
    </nav>
  )
}


export default Nav