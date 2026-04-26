import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

function Home() {
  return (
    <main className="container">
      <section className="hero-section animate-fade-in" style={{ paddingTop: '100px', fontFamily: '"Satoshi", sans-serif' }}>
        <HeroCarousel />

        <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', fontFamily: '"Gaya", serif', fontWeight: 'normal', fontStyle: 'normal' }}>Building Innerhug<br></br>
          Lover of traditional music, learning,good <br />aesthetics and a believer.</h2>
        <p className="hero-subtitle" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Growth & Product</p>

        <p className="hero-description" style={{ marginTop: '0' }}>
          I'm a B.S. student at IIT Patna and a data-driven professional deeply involved in the startup ecosystem.
          I specialize in growth strategy, marketing, and product development, prioritizing value creation through innovation, trust, and connection.
        </p>

        <div style={{ paddingBottom: '120px' }}>
          <Link to="/work" className="btn btn-primary" style={{ marginRight: '15px', fontFamily: 'inherit' }}>Check out my work</Link>
          <a href="https://www.linkedin.com/in/shivam-rawat-1b393928a/" target="_blank" rel="noreferrer" className="btn" style={{ fontFamily: 'inherit' }}>LinkedIn Profile</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
