import SocialMediaLinksFooter from './SocialMediaLinksFooter';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleTermsClick = () => {
    // This will scroll to the top of the page with smooth behavior on each click
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <p className="web-design">
        Designed with <i className="fa-solid fa-heart"></i> by mari!{' '}
      </p>
      <Link
        className="footer-therms-and-conditions"
        to="/therms-and-conditions"
        onClick={handleTermsClick}
      >
        Therms and Conditions
      </Link>
      <p className="copyright">
        © 2024 Studio Paulinesky - All rights reserved
      </p>
      <SocialMediaLinksFooter />
    </footer>
  );
};

export default Footer;
