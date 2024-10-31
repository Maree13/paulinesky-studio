import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { useState } from 'react';
import SocialMediaLinks from './SocialMediaLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize state

  return (
    <header>
      {/* Button that toggles between burger and cross icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
        {/* Toggle icon based on isOpen state */}
      </button>

      <nav className={`navbar-navigation ${isOpen ? 'open' : ''}`}>
        <div className="navbar-link-container">
          <Link className="menu-link" id="menu-link-01" to="/">
            Intro
          </Link>
          <br />
          <Link className="menu-link" id="menu-link-02" to="/aboutme">
            O mně
          </Link>
          <br />{' '}
          <Link className="menu-link" id="menu-link-03" to="/services">
            Služby
          </Link>
          <br />
          <Link className="menu-link" id="menu-link-04" to="/contact">
            Contact
          </Link>
        </div>
        <SocialMediaLinks />
        <div className="english">En</div>
      </nav>
    </header>
  );
};

export default Navbar;
