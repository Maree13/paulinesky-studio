import ReservationButton from '../components/ReservationButton';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-text">
        <h1 className="contact-title">- Kontakt -</h1>
        <p className="address">
          Mánesova 15 <br />
          120 00 Praha <br />
        </p>

        <p className="email">
          <a href="mailto:studio.paulinesky@gmail.com">
            studio.paulinesky@gmail.com
          </a>
        </p>

        <ReservationButton />
      </div>

      <div className="google-map">
        <iframe
          title="Mánesova 15, Praha"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3940197077823!2d14.434079676573484!3d50.0789093715236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948e2a89ffe1%3A0xea2d1725c4042ea!2sM%C3%A1nesova%20753%2F15%2C%20120%2000%20Vinohrady!5e0!3m2!1sen!2scz!4v1730494353765!5m2!1sen!2scz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
