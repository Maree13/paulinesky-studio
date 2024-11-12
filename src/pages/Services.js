import ReservationButton from '../components/ReservationButton';
import { useTranslation } from 'react-i18next';
import ServicesData from '../components/ServicesData';

const Services = () => {
  const { t } = useTranslation('services');

  return (
    <section className="services">
      <div className="services-text">
        <h1 className="services-title">{t('servicesTitle')}</h1>
        {ServicesData.map((category) => (
          <div key={category.category}>
            <h2>{category.category}</h2>
            <table>
              <tbody>
                {category.services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
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
