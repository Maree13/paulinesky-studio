import React, { useState, useEffect, useRef } from 'react';
import img1 from '../imgomne/img-omne-1.jpg';
import img2 from '../imgomne/img-omne-2.jpg';
import img3 from '../imgomne/img-omne-3.jpg';

const images = [img1, img2, img3];

const Aboutme = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use useRef to keep track of currentImageIndex without causing re-renders
  const currentImageIndexRef = useRef(currentImageIndex);

  useEffect(() => {
    // Update the ref whenever currentImageIndex changes
    currentImageIndexRef.current = currentImageIndex;
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const prevIndex = currentImageIndexRef.current;
      const nextIndex = (prevIndex + 1) % images.length;

      setPrevImageIndex(prevIndex);
      setCurrentImageIndex(nextIndex);
      currentImageIndexRef.current = nextIndex;
      setIsTransitioning(true);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 7000); // Duration of the fade transition (match with CSS)
    }, 14000); // Interval between image changes

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="aboutme">
      <div className="aboutme-text">
        <h1>- O mně -</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          quod sapiente corporis sint quibusdam quidem asperiores id impedit
          exercitationem soluta expedita cum accusantium sunt, veniam illum? Ad
          aliquid earum unde!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          aperiam, voluptate sapiente dolorem eaque facere quia fugit repellat
          iste voluptas, sit debitis modi iure, harum recusandae non. Neque,
          dolor nam.
        </p>
      </div>
      <div className="aboutme-image-container">
        {isTransitioning && (
          <div
            className="aboutme-background-image prev-image fade-out"
            style={{ backgroundImage: `url(${images[prevImageIndex]})` }}
          ></div>
        )}
        <div
          className="aboutme-background-image current-image fade-in"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
      </div>
    </section>
  );
};

export default Aboutme;
