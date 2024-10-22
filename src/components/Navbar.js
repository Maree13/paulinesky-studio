import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">O mně</Link>
        <br />
        <Link to="/gallery">Galérie</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
