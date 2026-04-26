import React, { useEffect, useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { src: '/photo1.jpg', alt: 'Modern Workspace', description: 'Marketing Team at Kult' },
      { src: '/ff.jpg', alt: 'Data Analytics Dashboard', description: 'At IIT Patna with my friends' },
      { src: '/photo2.jpg', alt: 'Teamwork', description: 'First day in Agniverse' },
      { src: '/gallery_startup_1777012814162.png', alt: 'Startup Desk', description: 'Building e-commerce solutions from the ground up.' }
    ]);
  }, []);

  return (
    <main className="container">
      <section style={{ paddingTop: '120px' }}>
        <h2>Gallery</h2>
        <p style={{ marginBottom: '2rem' }}>A visual showcase of my journey.</p>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={img.src} alt={img.alt} loading="lazy" onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--accent-color); height: 100%; display: flex; align-items: center; justify-content: center;">Placeholder: ${img.alt}</div>`;
              }} />
              <div className="gallery-overlay">
                <p>{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
