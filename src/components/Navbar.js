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

  // Funkcia na zatvorenie menu po kliknutí na link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      {/* Button that toggles between burger and cross icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
        {/* Toggle icon based on isOpen state */}
      </button>

      {/* Tlačidlo na prepínanie jazykov, umístěné vedle hamburger menu */}
      <button className="language-toggle" onClick={toggleLanguage}>
        {i18n.language === 'cs' ? t('english') : t('czech')}
      </button>

      <nav className={`navbar-navigation ${isOpen ? 'open' : ''}`}>
        <div className="navbar-link-container">
          <Link
            className="menu-link"
            id="menu-link-01"
            to="/"
            onClick={closeMenu}
          >
            {t('intro')}
          </Link>
          <br />
          <Link
            className="menu-link"
            id="menu-link-02"
            to="/aboutme"
            onClick={closeMenu}
          >
            {/* O mně */}
            {t('aboutMe')}
          </Link>
          <br />{' '}
          <Link
            className="menu-link"
            id="menu-link-03"
            to="/services"
            onClick={closeMenu}
          >
            {/* Služby */}
            {t('services')}
          </Link>
          <br />
          <Link
            className="menu-link"
            id="menu-link-04"
            to="/contact"
            onClick={closeMenu}
          >
            {/* Kontakt */}
            {t('contact')}
          </Link>
        </div>
        <SocialMediaLinks />

        {/* <div className="english">En</div> */}
        {/* Tlačidlo na prepínanie jazykov */}
        {/* <button className="language-toggle" onClick={toggleLanguage}>
          {i18n.language === 'cs' ? t('english') : t('czech')}
        </button> */}
        {/* <div className="english">{t('english')}</div> */}
      </nav>
    </header>
  );
};

export default Navbar;
