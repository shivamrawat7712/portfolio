import React from 'react';

const companies = [
  { url: 'https://adidas.com', icon: <img src="/kult.lgo.jpeg" alt="Kult" className="company-logo" /> },
  { url: 'https://yoddha.store/', icon: <img src="/yoddha_store_logo.jpeg" alt="Nike" className="company-logo" /> },
  { url: 'https://www.veducation.world/', icon: <img src="1699425699981.jpeg" alt="Puma" className="company-logo" /> },
  { url: 'https://www.agniverse.co/', icon: <img src="/1728133232305.jpeg" alt="Gucci" className="company-logo" /> },
];

function LogoMarquee() {
  const Group = () => (
    <div className="logo-marquee-group">
      {companies.map((company, index) => (
        <a key={index} href={company.url} target="_blank" rel="noopener noreferrer" className="logo-item" aria-label={`Visit company ${index + 1}`}>
          {company.icon}
        </a>
      ))}
    </div>
  );

  return (
    <div className="logo-marquee-container">
      <div className="logo-marquee-track">
        <Group />
        <div className="logo-marquee-group" aria-hidden="true">
          {companies.map((company, index) => (
            <a key={`dup-${index}`} href={company.url} target="_blank" rel="noopener noreferrer" className="logo-item" aria-label={`Visit company ${index + 1}`} tabIndex="-1">
              {company.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoMarquee;
