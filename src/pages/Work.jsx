import React from 'react';
import { Link } from 'react-router-dom';
import { workExperiences, projects } from '../data/workData';

function Work() {
  return (
    <main className="container">
      <section style={{ paddingTop: '120px' }}>
        <h2>Professional Experience</h2>
        <div className="work-grid">
          {workExperiences.map((work, index) => (
            <Link 
              key={work.id} 
              to={`/work/${work.id}`} 
              className="work-card glass-panel animate-fade-in" 
              style={{ animationDelay: `${0.1 * (index + 1)}s`, display: 'block', border: `2px solid ${work.color}` }}
            >
              <h3>{work.title}</h3>
              <h4>{work.company}{work.period ? ` • ${work.period}` : ''}</h4>
              <p>{work.shortDescription}</p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: '500' }}>
                View Contributions &rarr;
              </div>
            </Link>
          ))}
        </div>

        <h2 style={{ marginTop: '4rem' }}>Projects</h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={`/work/${project.id}`} 
              className="work-card glass-panel"
              style={{ display: 'block', border: `2px solid ${project.color}` }}
            >
              <h3>{project.title}</h3>
              <h4>{project.company}{project.period ? ` • ${project.period}` : ''}</h4>
              <p>{project.shortDescription}</p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: '500' }}>
                View Details &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Work;
