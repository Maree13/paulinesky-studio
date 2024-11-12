import React from 'react';
import ReservationButton from '../components/ReservationButton';
import { useTranslation } from 'react-i18next';
// Importing JSON data from the correct paths
import ServicesDataEn from '../locales/en/services.json';
import ServicesDataCs from '../locales/cs/services.json';

const Services = () => {
  const { t, i18n } = useTranslation('services');

  // Determine which language dataset to use based on the current language
  const ServicesData = i18n.language.startsWith('cs')
    ? ServicesDataCs
    : ServicesDataEn;

  return (
    <section className="services">
      <div className="services-text">
        <h1 className="services-title">{t('servicesTitle')}</h1>
        {ServicesData.categories.map((category, idx) => (
          <div key={idx}>
            <h2>{t(category.category)}</h2>
            <table>
              <tbody>
                {category.services.map((service, index) => (
                  <tr key={index}>
                    <td>{t(service.name)}</td>{' '}
                    {/* Optionally translate service names if needed */}
                    <td>{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <ReservationButton />
      </div>
      <div className="services-background-image"></div>
    </section>
  );
};

export default Services;
