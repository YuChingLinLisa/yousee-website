import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const LINE_BOOKING_URL = "https://line.me/R/ti/p/@545trppy";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 90,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? 'rgba(0, 36, 40, 0.94)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none',
      padding: isScrolled ? '12px 0' : '20px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/yousee-logo-light.png" alt="有序 YouSee" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop Menu - 精簡為 4 個入口 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-menu">
          <a href="#about" style={{ color: 'var(--color-cream-light)', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: '0.06em' }}>關於有序</a>
          <a href="#consultation" style={{ color: 'var(--color-cream-light)', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: '0.06em' }}>公益諮詢</a>
          <a href="#faq" style={{ color: 'var(--color-cream-light)', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: '0.06em' }}>常見問題</a>
          
          <a 
            href={LINE_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ padding: '8px 22px', fontSize: '0.9rem', letterSpacing: '0.06em' }}
          >
            <span>預約公益諮詢</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '4px' }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: '#002428',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.05rem' }}>關於有序</a>
          <a href="#consultation" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.05rem' }}>公益諮詢</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.05rem' }}>常見問題</a>
          <a 
            href={LINE_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ marginTop: '8px', textAlign: 'center' }}
          >
            <span>預約公益諮詢</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
