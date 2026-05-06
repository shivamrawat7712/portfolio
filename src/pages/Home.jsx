import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import LogoMarquee from '../components/LogoMarquee';

function Home() {
  return (
    <>
      <main className="container">
        <section className="hero-section animate-fade-in" style={{ paddingTop: '100px', paddingBottom: '40px', minHeight: 'auto', fontFamily: '"Satoshi", sans-serif' }}>
          <HeroCarousel />

          <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', fontFamily: '"Gaya", serif', fontWeight: 'normal', fontStyle: 'normal' }}>Building Innerhug<br></br>
            Lover of traditional music, learning,good <br />aesthetics and a believer.</h2>
          <p className="hero-subtitle" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Growth & Product</p>

          <p className="hero-description" style={{ marginTop: '0' }}>
            I'm a B.S. student at IIT Patna and a data-driven professional deeply involved in the startup ecosystem.
            I specialize in growth strategy, marketing, and product development, prioritizing value creation through innovation, trust, and connection.
          </p>

          <div style={{ paddingBottom: '20px' }}>
            <Link to="/work" className="btn btn-primary" style={{ marginRight: '15px', fontFamily: 'inherit' }}>Check out my work</Link>
            <a href="https://www.linkedin.com/in/shivam-rawat-1b393928a/" target="_blank" rel="noreferrer" className="btn" style={{ fontFamily: 'inherit' }}>LinkedIn Profile</a>
          </div>
        </section>
      </main>
      
      <LogoMarquee />

      <main className="container">
        <section className="intro-section" style={{ minHeight: 'auto', padding: '80px 20px 120px' }}>
          <p className="intro-label">About Me</p>
          <h2 className="intro-heading">
            I craft growth strategies<br />
            that move the needle.
          </h2>
          <div className="intro-grid">
            <div className="intro-card glass-panel">
              <span className="intro-card-number">01</span>
              <h3>Growth &amp; Strategy</h3>
              <p>Data-driven growth frameworks, go-to-market strategies, and scaling playbooks that turn early traction into sustainable momentum.</p>
            </div>
            <div className="intro-card glass-panel">
              <span className="intro-card-number">02</span>
              <h3>Product Thinking</h3>
              <p>User-centric product development—from ideation and wireframing to launch—focused on solving real problems with elegant simplicity.</p>
            </div>
            <div className="intro-card glass-panel">
              <span className="intro-card-number">03</span>
              <h3>Marketing &amp; Branding</h3>
              <p>Building compelling brand narratives and creative campaigns that resonate with audiences and drive meaningful engagement.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
