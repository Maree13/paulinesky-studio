// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importujte preklady
import translationEN from './locales/en/translation.json';
import translationCS from './locales/cs/translation.json';
import navbarEN from './locales/en/navbar.json';
import navbarCS from './locales/cs/navbar.json';
import aboutmeEN from './locales/en/aboutme.json';
import aboutmeCS from './locales/cs/aboutme.json';
import contactCS from './locales/cs/contact.json';
import contactEN from './locales/en/contact.json';
import introCS from './locales/cs/intro.json';
import introEN from './locales/en/intro.json';
import servicesCS from './locales/cs/services.json';
import servicesEN from './locales/en/services.json';
import routesEN from './locales/en/routes.json';
import routesCS from './locales/cs/routes.json';

// Definujte dostupné jazyky a preklady
const resources = {
  en: {
    translation: translationEN,
    navbar: navbarEN,
    aboutme: aboutmeEN,
    contact: contactEN,
    intro: introEN,
    services: servicesEN,
    routes: routesEN,
  },
  cs: {
    translation: translationCS,
    navbar: navbarCS,
    aboutme: aboutmeCS,
    contact: contactCS,
    intro: introCS,
    services: servicesCS,
    routes: routesCS,
  },
};

// porofnaci kod:

i18n
  .use(LanguageDetector) // Detekcia jazyka
  .use(initReactI18next) // Prepojenie s Reactom
  .init({
    resources,
    fallbackLng: 'en',
    debug: false, // Nastavte na true pre debugging

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    ns: ['translation', 'routes', 'navbar', 'aboutme', 'services', 'intro'],
    defaultNS: 'translation',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// Inicializujte i18n
// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: 'cs',
//     fallbackLng: 'en',

//     ns: ['translation', 'navbar', 'aboutme', 'contact', 'intro', 'services'],
//     defaultNS: 'translation',

//     keySeparator: false,

//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;
