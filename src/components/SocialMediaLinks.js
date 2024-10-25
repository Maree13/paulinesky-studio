import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Uistite sa, že máte nainštalované react-icons

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a
        className="social-media-icon"
        href="https://www.facebook.com/profile.php?id=100086484022698"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </a>
      <a
        className="social-media-icon"
        href="https://www.instagram.com/paulinesky_studio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
