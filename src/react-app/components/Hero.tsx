import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-name">Keiko Kaneko</h2>
        <p className="hero-title">東京都在住のWEBプログラマー。将棋が好き。</p>
      </div>
    </section>
  );
};

export default Hero;
