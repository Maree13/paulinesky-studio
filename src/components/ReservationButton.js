import { useTranslation } from 'react-i18next';

const ReservationButton = () => {
  const { t } = useTranslation('translation');

  const navigateToLink = () => {
    window.open(
      'https://studio-paulinesky2.reservio.com/services',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <button onClick={navigateToLink} className="button-style">
      {t('reserve')}
    </button>
  );
};

export default ReservationButton;
