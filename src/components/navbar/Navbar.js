import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <div className="math-fans">
        <p>Math Fans</p>
      </div>
      <div className="links">
        <NavLink className="link" to="/home">Home</NavLink>
        <NavLink className="link" to="/calculator">Calculator</NavLink>
        <NavLink className="link" to="/quotes">Quotes</NavLink>
      </div>
    </nav>
  </div>
);

export default Navbar;
