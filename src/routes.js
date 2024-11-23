// routes.js
// export const routes = {
//   en: {
//     home: '/',
//     about: '/aboutme',
//     services: '/services',
//     contact: '/contact',
//     therms: '/therms-and-conditions',
//   },
//   cs: {
//     home: '/',
//     about: '/o-mne',
//     services: '/sluzby',
//     contact: '/kontakt',
//     therms: '/podminky',
//   },
// };

// src/routes.js
import { useTranslation } from 'react-i18next';

export const useRoutesConfig = () => {
  const { t } = useTranslation('routes');

  return {
    home: t('home'),
    aboutMe: t('aboutMe'),
    services: t('services'),
    contact: t('contact'),
    thermsAndConditions: t('thermsAndConditions'),
    error: t('error'),
  };
};
