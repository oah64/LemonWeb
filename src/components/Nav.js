import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Nav() {
  return (
    <header className="App-header">
      <Link to="/">
        <img
          src="../assets/Logo.svg"
          alt="Little Lemon Logo"
          className="logo"
        />
      </Link>
      <nav aria-label="Main">
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavHashLink to="/#about">About</NavHashLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
