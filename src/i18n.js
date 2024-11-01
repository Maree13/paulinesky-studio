// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importujte preklady
import translationEN from './locales/en/translation.json';
import translationCS from './locales/cs/translation.json';
import navbarEN from './locales/en/navbar.json';
import navbarCS from './locales/cs/navbar.json';
import aboutmeEN from './locales/en/aboutme.json';
import aboutmeCS from './locales/cs/aboutme.json';

// Definujte dostupné jazyky a preklady
const resources = {
  en: {
    translation: translationEN,
    navbar: navbarEN,
    aboutme: aboutmeEN,
  },
  cs: {
    translation: translationCS,
    navbar: navbarCS,
    aboutme: aboutmeCS,
  },
};

// Inicializujte i18n
i18n
  .use(initReactI18next) // Prepojenie s Reactom
  .init({
    resources,
    lng: 'cs', // Počiatočný jazyk
    fallbackLng: 'en', // Jazyk, ktorý sa použije, ak preklad chýba

    ns: ['translation', 'navbar'], // Definujte použité namespaces
    defaultNS: 'translation',

    keySeparator: false, // Používajte priamo kľúče pre preklady

    interpolation: {
      escapeValue: false, // React už escapuje XSS
    },
  });

export default i18n;
