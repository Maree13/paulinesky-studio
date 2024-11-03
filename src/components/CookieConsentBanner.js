import CookieConsent from 'react-cookie-consent';
// import '../index.css';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Souhlasím"
      declineButtonText="Odmítám"
      enableDeclineButton
      cookieName="myAwesomeCookieConsent"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#2B373B',
        color: '#ffffff',
        fontSize: '14px',
        padding: '20px 30px',
        textAlign: 'center',
      }}
      buttonStyle={{
        backgroundColor: '#497C83',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '3px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '13px',
        transition: 'background-color 0.3s, transform 0.3s',
        textTransform: 'uppercase',
      }}
      declineButtonStyle={{
        backgroundColor: '#B6161C',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '3px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '13px',
        transition: 'background-color 0.3s, transform 0.3s',
        textTransform: 'uppercase',
      }}
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
