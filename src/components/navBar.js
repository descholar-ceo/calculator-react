import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
      <NavLink to="/">Math Magicians</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/quotes">Quotes</NavLink>
    </nav>
  </header>
);

export default NavBar;
