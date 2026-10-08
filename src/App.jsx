import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resonance from './components/Resonance';
import About from './components/About';
import Consultation from './components/Consultation';
import CharityProcess from './components/CharityProcess';
import Founder from './components/Founder';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { MessageCircle, ArrowRight } from 'lucide-react';

const LINE_BOOKING_URL = "https://line.me/R/oaMessage/@545trppy/?我想預約有序的公益諮詢";

export default function App() {
  return (
    <div className="app-root">
      {/* Subtle ambient light gradient background */}
      <div className="ambient-bg" />

      {/* Navigation */}
      <Navbar />

      {/* 1. Hero: 有序是誰？ */}
      <Hero />

      {/* 2. Resonance: 你理解我的狀態嗎？ */}
      <Resonance />

      {/* 3. About + RainbowNumbers 合併：你怎麼陪我？ */}
      <About />

      {/* 4. Consultation 精簡版：我會得到什麼服務？ */}
      <Consultation />

      {/* 5. CharityProcess 精簡版：我要怎麼參加？ */}
      <CharityProcess />

      {/* 6. Founder 精簡版：誰在陪我？ */}
      <Founder />

      {/* 7. FAQ 精簡版：我還有什麼疑問？ */}
      <FAQ />

      {/* 8. FinalCTA: 我要下一步做什麼？ */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Bar */}
      <div className="mobile-sticky-bar">
        <a 
          href={LINE_BOOKING_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{ width: '100%', padding: '12px 20px', fontSize: '0.95rem' }}
        >
          <MessageCircle size={18} />
          <span>預約 40 分鐘公益諮詢 (LINE)</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
