import React, { useState, useEffect } from 'react';

const images = [
  '/photo2.jpg',
  '/photo5.jpg',
  '/photo4.jpg',
  '/photo6.jpg',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Append the first image to the end to create a seamless infinite loop
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // When we reach the cloned first image, snap back to the real first image invisibly
  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // Disable transition for the invisible snap
        setCurrentIndex(0); // Jump back to index 0
      }, 800); // 800ms matches the CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, extendedImages.length]);

  return (
    <div className="hero-carousel-wrapper">
      <div
        className="hero-carousel-track"
        style={{
          width: `${extendedImages.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / extendedImages.length)}%)`,
          transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)' : 'none'
        }}
      >
        {extendedImages.map((img, idx) => (
          <div
            key={idx}
            className="carousel-slide"
            style={{ width: `${100 / extendedImages.length}%` }}
          >
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="carousel-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div style="width: 100%; height: 100%; background: var(--glass-bg); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); font-family: var(--font-main);">Photo ${idx + 1}</div>`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
