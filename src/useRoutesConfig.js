// src/useRoutesConfig.js
import { useTranslation } from 'react-i18next';
import { routesConfig } from './routesConfig';

export const useRoutesConfig = () => {
  const { i18n } = useTranslation('routes');

  const currentLanguage = i18n.language || 'en';

  return {
    home: routesConfig.home[currentLanguage],
    aboutMe: routesConfig.aboutMe[currentLanguage],
    services: routesConfig.services[currentLanguage],
    contact: routesConfig.contact[currentLanguage],
    termsAndConditions: routesConfig.termsAndConditions[currentLanguage],
    error: routesConfig.error[currentLanguage],
  };
};
