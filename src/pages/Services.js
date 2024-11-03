import ReservationButton from '../components/ReservationButton';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation('services');

  return (
    <section className="services">
      <div className="services-text">
        <h1 className="services-title">{t('servicesTitle')}</h1>
        <p className="services-pricing-list">
          - Lorem ipsum dolor sit amet consectetur, <br />
          - adipisicing elit. Esse iure facilis <br />
          - deleniti cupiditate debitis nisi adipisci ratione, <br />
          - tenetur distinctio iste tempora alias expedita fuga,
          <br />
          - in numquam sapiente ullam quae <br />
          - ecessitatibus blanditiis vero et. Dolore aut doloremque deserunt -
          numquam, <br />
          - exercitationem deleniti harum? Adipisci qui ducimus id, <br />
          - voluptates temporibus accusantium commodi officiis quisquam
          corrupti,
          <br /> - sed error facere delectus inventore! Quis,
          <br />- tempora pariatur.
        </p>

        <ReservationButton />
      </div>

      <div className="services-background-image"></div>
    </section>
  );
};

export default Services;
