import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resonance from './components/Resonance';
import About from './components/About';
import RainbowNumbers from './components/RainbowNumbers';
import Services from './components/Services';
import Consultation from './components/Consultation';
import Takeaways from './components/Takeaways';
import Founder from './components/Founder';
import CharityProcess from './components/CharityProcess';
import BirthPrivacy from './components/BirthPrivacy';
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

      {/* 1. Hero 主視覺 */}
      <Hero />

      {/* 2. 關係情緒共鳴區 */}
      <Resonance />

      {/* 3. 關於有序 */}
      <About />

      {/* 4. 彩虹數字是什麼 */}
      <RainbowNumbers />

      {/* 5. 你可以從哪裡開始 */}
      <Services />

      {/* 6. 40 分鐘線上公益諮詢 */}
      <Consultation />

      {/* 7. 諮詢後可能帶走什麼 */}
      <Takeaways />

      {/* 8. 品牌故事 */}
      <Founder />

      {/* 9. 公益參與方式 */}
      <CharityProcess />

      {/* 10. 出生資料與隱私說明 */}
      <BirthPrivacy />

      {/* 11. 常見問題 */}
      <FAQ />

      {/* 12. 最後行動呼籲 */}
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
