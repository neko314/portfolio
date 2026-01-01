import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Links from './components/Links';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Links />
      </main>
      <Footer />
    </div>
  );
};

export default App;
