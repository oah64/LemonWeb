import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

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
            <a href="https://www.instagram.com/littlelemon" aria-label="Little Lemon on Instagram">
              <FaInstagram aria-hidden="true" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/littlelemon" aria-label="Little Lemon on Facebook">
              <FaFacebook aria-hidden="true" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/littlelemon" aria-label="Little Lemon on Twitter">
              <FaXTwitter aria-hidden="true" /> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/littlelemon" aria-label="Little Lemon on LinkedIn">
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
