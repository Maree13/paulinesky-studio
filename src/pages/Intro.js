import ReservationButton from '../components/ReservationButton';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation('intro');

  return (
    <section className="intro">
      <div className="intro-text">
        <h1 className="intro-title">{t('introTitle')}</h1>
        <p className="paragraph intro-paragraph">{t('paragraph1')}</p>
        <p className="paragraph intro-paragraph">{t('paragraph2')}</p>
        <ReservationButton />
        {/* <p className="paragraph intro-paragraph">{t('paragraph3')}</p>
        <p className="paragraph intro-paragraph">{t('paragraph4')}</p>
        <p className="paragraph intro-paragraph">{t('paragraph5')}</p>
        <p className="paragraph intro-paragraph">{t('paragraph6')}</p> */}
      </div>
      <div className="intro-background-image"></div>
    </section>
  );
};

export default Intro;
