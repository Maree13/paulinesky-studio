import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SocialMediaLinks from './SocialMediaLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize state
  const { t, i18n } = useTranslation('navbar'); // Použitie 'navbar' namespace

  // Funkcia na prepínanie jazykov
  const toggleLanguage = () => {
    const newLang = i18n.language === 'cs' ? 'en' : 'cs';
    i18n.changeLanguage(newLang);
  };

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
            {t('intro')}
          </Link>
          <br />
          <Link className="menu-link" id="menu-link-02" to="/aboutme">
            {/* O mně */}
            {t('aboutMe')}
          </Link>
          <br />{' '}
          <Link className="menu-link" id="menu-link-03" to="/services">
            {/* Služby */}
            {t('services')}
          </Link>
          <br />
          <Link className="menu-link" id="menu-link-04" to="/contact">
            {/* Kontakt */}
            {t('contact')}
          </Link>
        </div>
        <SocialMediaLinks />

        {/* <div className="english">En</div> */}
        {/* Tlačidlo na prepínanie jazykov */}
        <button className="language-toggle" onClick={toggleLanguage}>
          {i18n.language === 'cs' ? t('english') : t('czech')}
        </button>
        {/* <div className="english">{t('english')}</div> */}
      </nav>
    </header>
  );
};

export default Navbar;
