import ReservationButton from '../components/ReservationButton';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-text">
        <h1 className="intro-title">
          - Kosmetické <br /> studio <br /> Paulinesky -
        </h1>

        <ReservationButton />
      </div>
      {/* <div className="intro-image-container"> */}
      <div className="intro-background-image"></div>
      {/* </div> */}
    </section>
  );
};

export default Intro;
