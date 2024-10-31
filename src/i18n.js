// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importujte preklady
import translationEN from './locales/en/translation.json';
import translationCS from './locales/cs/translation.json';

// Definujte dostupné jazyky a preklady
const resources = {
  en: {
    translation: translationEN,
  },
  cs: {
    translation: translationCS,
  },
};

// Inicializujte i18n
i18n
  .use(initReactI18next) // Prepojenie s Reactom
  .init({
    resources,
    lng: 'cs', // Počiatočný jazyk
    fallbackLng: 'en', // Jazyk, ktorý sa použije, ak preklad chýba

    keySeparator: false, // Používajte priamo kľúče pre preklady

    interpolation: {
      escapeValue: false, // React už escapuje XSS
    },
  });

export default i18n;
