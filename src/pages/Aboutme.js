import '../index.css';

const Aboutme = () => {
  return (
    <section className="aboutme">
      <div className="aboutme-text">
        <h1>- O mně -</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          quod sapiente corporis sint quibusdam quidem asperiores id impedit
          exercitationem soluta expedita cum accusantium sunt, veniam illum? Ad
          aliquid earum unde!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          aperiam, voluptate sapiente dolorem eaque facere quia fugit repellat
          iste voluptas, sit debitis modi iure, harum recusandae non. Neque,
          dolor nam.
        </p>
      </div>
      {/* Obrázek na pozadí s dynamickou změnou */}
      <div className="aboutme-background-image">
        <div className="slideshow">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
