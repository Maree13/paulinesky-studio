import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Services from './pages/Services';
import Intro from './pages/Intro';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CookieConsentBanner from './components/CookieConsentBanner';
import ThermsAndConditions from './pages/ThermsAndConditions';
import { routes } from './routes';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

const App = () => {
  const { i18n } = useTranslation();
  const [languageChanged, setLanguageChanged] = useState(false);

  useEffect(() => {
    // Update state to trigger re-render when language changes
    setLanguageChanged((prev) => !prev);
  }, [i18n.language]);

  const currentLanguage = i18n.language || 'en';
  const currentRoutes = routes[currentLanguage];

  return (
    <>
      <BrowserRouter>
        <Routes key={languageChanged}>
          <Route element={<SharedLayout />}>
            <Route path={currentRoutes.home} element={<Intro />} />
            <Route path={currentRoutes.about} element={<Aboutme />} />
            <Route path={currentRoutes.services} element={<Services />} />
            <Route path={currentRoutes.contact} element={<Contact />} />
            <Route
              path={currentRoutes.therms}
              element={<ThermsAndConditions />}
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CookieConsentBanner />
    </>
  );
};

export default App;

// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// v return musí něco být
// na konci souboru musí být řádek s exportem
