const ReservationButton = () => {
  const navigateToLink = () => {
    window.open(
      'https://studio-paulinesky2.reservio.com/services',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <button onClick={navigateToLink} className="button-style">
      Book a Service
    </button>
  );
};

export default ReservationButton;
