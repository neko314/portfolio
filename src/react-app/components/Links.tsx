import React from 'react';
import './Links.css';

interface LinkItem {
  name: string;
  url: string;
  icon?: string;
  iconUrl?: string;
}

const Links: React.FC = () => {
  const links: LinkItem[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/neko314',
      iconUrl: 'https://cdn.simpleicons.org/github/2c2c2c',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/neko314_',
      iconUrl: 'https://cdn.simpleicons.org/x/2c2c2c',
    },
    {
      name: 'Blog',
      url: 'https://neko314.hatenablog.com/',
      icon: '📝',
    }
  ];

  return (
    <section className="links">
      <div className="links-container">
        <h3 className="links-title">Links</h3>
        <div className="links-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">
                {link.iconUrl ? (
                  <img src={link.iconUrl} alt={`${link.name} icon`} />
                ) : (
                  link.icon
                )}
              </div>
              <div className="link-content">
                <h4 className="link-name">{link.name}</h4>
              </div>
              <div className="link-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
