import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SocialMediaLinks from './SocialMediaLinks';
import logo from '../imglogo/logo2.svg';
import { routes } from '../routes';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize state
  const { t, i18n } = useTranslation('navbar'); // Použitie 'navbar' namespace

  const navigate = useNavigate();
  const location = useLocation();
  const currentLanguage = i18n.language || 'en';
  const nextLanguage = currentLanguage === 'cs' ? 'en' : 'cs';
  const currentRoutes = routes[currentLanguage];
  const nextRoutes = routes[nextLanguage];

  // Change Language Function
  const changeLanguage = () => {
    const currentPath = location.pathname;
    const routeKey = Object.keys(currentRoutes).find(
      (key) => currentRoutes[key] === currentPath,
    );
    const newPath = routeKey ? nextRoutes[routeKey] : nextRoutes.home;

    i18n.changeLanguage(nextLanguage).then(() => {
      navigate(newPath);
    });
  };

  // Funkcia na prepínanie jazykov
  const toggleLanguage = () => {
    const newLang = i18n.language === 'cs' ? 'en' : 'cs';
    i18n.changeLanguage(newLang);
  };

  // Funkcia na zatvorenie menu po kliknutí na link
  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      {/* Button that toggles between burger and cross icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
        {/* Toggle icon based on isOpen state */}
      </button>

      <img className="logo" src={logo} alt="Logo" />

      {/* Tlačidlo na prepínanie jazykov, umístěné vedle hamburger menu */}
      <button className="language-toggle" onClick={changeLanguage}>
        {currentLanguage === 'cs' ? 'En' : 'Cs'}
      </button>

      <SocialMediaLinks />

      <nav className={`navbar-navigation ${isOpen ? 'open' : ''}`}>
        <div className="navbar-link-container">
          <Link
            className="menu-link"
            id="menu-link-01"
            to="/"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            {t('intro')}
          </Link>
          <br />
          <Link
            className="menu-link"
            id="menu-link-02"
            to="/aboutme"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            {/* O mně */}
            {t('aboutMe')}
          </Link>
          <br />{' '}
          <Link
            className="menu-link"
            id="menu-link-03"
            to="/services"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            {/* Služby */}
            {t('services')}
          </Link>
          <br />
          <Link
            className="menu-link"
            id="menu-link-04"
            to="/contact"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            {/* Kontakt */}
            {t('contact')}
          </Link>
        </div>

        {/* <div className="english">En</div> */}
        {/* Tlačidlo na prepínanie jazykov */}
        {/* <button className="language-toggle" onClick={toggleLanguage}>
          {i18n.language === 'cs' ? t('english') : t('czech')}
        </button> */}
        {/* <div className="english">{t('english')}</div> */}
      </nav>
      {/* <SocialMediaLinks /> */}

      {/* <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div> */}
    </header>
  );
};

export default Navbar;
