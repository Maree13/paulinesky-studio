// src/components/Navbar.js
// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
// import SocialMediaLinks from './SocialMediaLinks';
// import logo from '../imglogo/logo2.svg';
// import { useRoutesConfig } from '../routes';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation('navbar');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const routes = useRoutesConfig();

//   const currentLanguage = i18n.language || 'en';
//   const nextLanguage = currentLanguage === 'cs' ? 'en' : 'cs';

//   const changeLanguage = () => {
//     const currentPath = location.pathname;
//     const routeKey = Object.keys(routes).find(
//       (key) => routes[key] === currentPath,
//     );
//     const newPath = routeKey
//       ? i18n.getFixedT(nextLanguage, 'routes')(routeKey)
//       : routes.home;

//     i18n.changeLanguage(nextLanguage).then(() => {
//       navigate(newPath, { replace: true });
//     });
//   };

//   const closeMenu = () => setIsOpen(false);
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <header>
//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       <img className="logo" src={logo} alt="Logo" />

//       <button className="language-toggle" onClick={changeLanguage}>
//         {currentLanguage === 'cs' ? 'En' : 'Cs'}
//       </button>

//       <SocialMediaLinks />

//       <nav className={`navbar-navigation ${isOpen ? 'open' : ''}`}>
//         <div className="navbar-link-container">
//           <Link
//             className="menu-link"
//             to={routes.home}
//             onClick={() => {
//               closeMenu();
//               scrollToTop();
//             }}
//           >
//             {t('intro')}
//           </Link>
//           <br />
//           <Link
//             className="menu-link"
//             to={routes.aboutMe}
//             onClick={() => {
//               closeMenu();
//               scrollToTop();
//             }}
//           >
//             {t('aboutMe')}
//           </Link>
//           <br />
//           <Link
//             className="menu-link"
//             to={routes.services}
//             onClick={() => {
//               closeMenu();
//               scrollToTop();
//             }}
//           >
//             {t('services')}
//           </Link>
//           <br />
//           <Link
//             className="menu-link"
//             to={routes.contact}
//             onClick={() => {
//               closeMenu();
//               scrollToTop();
//             }}
//           >
//             {t('contact')}
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SocialMediaLinks from './SocialMediaLinks';
import logo from '../imglogo/logo2.svg';
import { useRoutesConfig } from '../useRoutesConfig';
import { routesConfig } from '../routesConfig'; // Import routesConfig

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation('navbar'); // Používajte len 'navbar' namespace
  const navigate = useNavigate();
  const location = useLocation();
  const routes = useRoutesConfig();

  const currentLanguage = i18n.language || 'en';
  const nextLanguage = currentLanguage === 'cs' ? 'en' : 'cs';

  const changeLanguage = () => {
    const currentPath = location.pathname;
    console.log('Current Path:', currentPath);

    // Nájdeme routeKey pre aktuálnu cestu
    const routeKey = Object.keys(routesConfig).find(
      (key) => routesConfig[key][currentLanguage] === currentPath,
    );
    console.log('Route Key:', routeKey);

    if (routeKey) {
      // Získame novú cestu pre nový jazyk
      const newPath = routesConfig[routeKey][nextLanguage];
      console.log('New Path:', newPath);

      // Zmeníme jazyk a navigujeme na novú cestu
      i18n.changeLanguage(nextLanguage).then(() => {
        console.log(`Language changed to: ${nextLanguage}`);
        navigate(newPath, { replace: true });
      });
    } else {
      // Ak route key nie je nájdený, navigujeme na home
      console.log('Route Key not found, navigating to home.');
      i18n.changeLanguage(nextLanguage).then(() => {
        console.log(`Language changed to: ${nextLanguage}`);
        navigate(routes.home, { replace: true });
      });
    }
  };

  const closeMenu = () => setIsOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <img className="logo" src={logo} alt="Logo" />

      <button className="language-toggle" onClick={changeLanguage}>
        {currentLanguage === 'cs' ? 'En' : 'Cs'}
      </button>

      <SocialMediaLinks />

      <nav className={`navbar-navigation ${isOpen ? 'open' : ''}`}>
        <div className="navbar-link-container">
          <Link
            className="menu-link"
            to={routes.home}
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
            to={routes.aboutMe}
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            {t('aboutMe')}
          </Link>
          <br />
          <Link
            className="menu-link"
            to={routes.services}
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            {t('services')}
          </Link>
          <br />
          <Link
            className="menu-link"
            to={routes.contact}
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
            {t('contact')}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
