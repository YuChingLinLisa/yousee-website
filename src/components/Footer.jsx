import React from 'react';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '64px 0 32px 0', marginTop: '64px' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', marginBottom: '64px' }}>
          <div style={{ flex: '1 1 250px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Compass color="var(--color-secondary)" />
              <span style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-secondary)', letterSpacing: '0.05em' }}>有序 yousee</span>
            </div>
            <p style={{ maxWidth: '300px', fontSize: '0.95rem', lineHeight: '2.0', letterSpacing: '0.03em' }}>透過彩虹數字，我們陪你從數字看見行為慣性，在關鍵時刻做出更適合的選擇</p>
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'white', marginBottom: '16px' }}>關注更多</h4>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/yousee_rainbow_numen?igsh=cW1ta3RnbWpma3pz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn btn-glass">查看 IG 日常</a>
              <a href="https://line.me/R/oaMessage/@545trppy/?領取2026能量關鍵字" target="_blank" rel="noopener noreferrer" className="btn btn-glass">前往 LINE 領取能量關鍵字</a>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} 有序 yousee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
