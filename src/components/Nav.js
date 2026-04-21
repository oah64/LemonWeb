import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
