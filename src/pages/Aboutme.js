import '../index.css';
import ReservationButton from '../components/ReservationButton';
import { useTranslation } from 'react-i18next';

const Aboutme = () => {
  const { t } = useTranslation('aboutme');

  return (
    <section className="aboutme">
      <div className="aboutme-text">
        <h1>{t('title')}</h1>
        <p className="paragraph aboutme-paragraph">{t('paragraph1')}</p>
        <p className="paragraph aboutme-paragraph">{t('paragraph2')}</p>
        <p className="paragraph aboutme-paragraph">{t('paragraph3')}</p>

        <ReservationButton />
      </div>
      {/* Obrázek na pozadí s dynamickou změnou */}
      <div className="aboutme-background-image">
        <div className="slideshow">
          <div className="slide slide1"></div>
          {/* <div className="slide slide2"></div>
          <div className="slide slide3"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
