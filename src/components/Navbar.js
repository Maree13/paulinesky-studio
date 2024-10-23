import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { useState } from 'react';

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
        <Link to="/">Intro</Link>
        <br />
        <Link to="/aboutme">O mně</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
