import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Services from './pages/Services';
import Intro from './pages/Intro';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CookieConsentBanner from './components/CookieConsentBanner';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<Intro />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
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
