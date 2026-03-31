import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import RainbowNumbers from './components/RainbowNumbers';
import Founder from './components/Founder';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-glow"></div>
      <Hero />
      <About />
      <RainbowNumbers />
      <Founder />
      <Services />
      <Footer />
    </>
  );
}

export default App;
