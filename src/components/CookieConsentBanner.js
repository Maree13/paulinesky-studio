import CookieConsent from 'react-cookie-consent';
import '../index.css';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Souhlasím"
      enableDeclineButton
      declineButtonText="Odmítnout"
      cookieName="myAwesomeCookieConsent"
      className="react-cookie-consent"
      buttonClassName="accept-button"
      declineButtonClassName="decline-button"
      expires={365}
      onAccept={() => {
        console.log('Uživatel souhlasil s cookies.');
      }}
      onDecline={() => {
        console.log('Uživatel nesouhlasil s cookies.');
      }}
    >
      Tato webová stránka používá cookies pro zajištění nejlepšího zážitku na
      našem webu.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
