import SocialMediaLinksFooter from './SocialMediaLinksFooter';


const Footer = () => {
  return (
    <footer className="footer">
      <p className="web-design">
        Designed with <i className="fa-solid fa-heart"></i> by mari!{' '}
      </p>
      <p className="copyright">
        © 2024 Studio Paulinesky - All rights reserved
      </p>
      <SocialMediaLinksFooter />
    </footer>
  );
};

export default Footer;
