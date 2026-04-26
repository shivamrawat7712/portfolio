import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allWorkData } from '../data/workData';

function WorkDetail() {
  const { id } = useParams();
  const detail = allWorkData.find(item => item.id === id);

  if (!detail) {
    return (
      <main className="container">
        <section style={{ paddingTop: '120px', textAlign: 'center' }}>
          <h2>Responsibility Not Found</h2>
          <p>The particular contribution you are looking for does not exist.</p>
          <Link to="/work" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Work</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="animate-fade-in" style={{ paddingTop: '120px', maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/work" style={{ color: 'var(--accent-color)', display: 'inline-block', marginBottom: '2rem', fontWeight: '500' }}>
          &larr; Back to Work
        </Link>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{detail.title}</h1>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '2rem' }}>
            {detail.company}{detail.period ? ` • ${detail.period}` : ''}
          </h3>
          
          <div style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            {/* Split content by newlines and render paragraphs for better formatting if user adds more content later */}
            {detail.content.split('\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            ))}
          </div>
          
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Summary</h4>
            <p style={{ fontStyle: 'italic' }}>{detail.shortDescription}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkDetail;
