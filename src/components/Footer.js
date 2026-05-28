import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <img src="../assets/restaurant.jpg" alt="Restaurant" />
      <nav aria-label="Doormat Navigation">
        <h3>Site Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
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
      <nav aria-label="Contact">
        <h3>Contact</h3>
        <ul>
          <li>Address: 123 Main Street, Chicago, USA</li>
          <li>Phone number: (123) 456-7890</li>
          <li>Email: info@littlelemon.com</li>
          <li>
            How to find us: We are located in the heart of downtown, just a few
            blocks from the central park. Look for our bright yellow awning!
          </li>
        </ul>
      </nav>
      <nav aria-label="Social Media">
        <h3>Social Media</h3>
        <ul>
          <li>
            Instagram:{" "}
            <a href="https://www.instagram.com/littlelemon" aria-label="Little Lemon on Instagram">littlelemon</a>
          </li>
          <li>
            Facebook:{" "}
            <a href="https://www.facebook.com/littlelemon" aria-label="Little Lemon on Facebook">littlelemon</a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://www.twitter.com/littlelemon" aria-label="Little Lemon on Twitter">littlelemon</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/company/littlelemon" aria-label="Little Lemon on LinkedIn">
              littlelemon
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
