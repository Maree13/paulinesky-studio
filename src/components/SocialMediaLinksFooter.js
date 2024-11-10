import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialMediaLinksFooter = () => {
  return (
    <div className="social-media-links-footer">
      <a
        className="social-media-icon-footer"
        href="https://www.facebook.com/profile.php?id=100086484022698"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </a>
      <a
        className="social-media-icon-footer"
        href="https://www.instagram.com/paulinesky_studio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={35} />
      </a>
    </div>
  );
};

export default SocialMediaLinksFooter;
