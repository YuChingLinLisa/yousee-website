import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

const LINE_URL = "https://line.me/R/oaMessage/@545trppy/?我想預約有序的公益諮詢";
const IG_URL = "https://instagram.com/yousee_rainbow_numen";

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      backgroundColor: '#002428',
      padding: '60px 0 30px 0',
      color: 'var(--color-muted-grey)',
      fontSize: '0.92rem'
    }}>
      <div className="container">
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Brand Info */}
          <div style={{ maxWidth: '360px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/yousee-logo.png" alt="有序 YouSee" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                有序 YouSee
              </span>
            </div>
            <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--color-muted-grey)' }}>
              以彩虹數字為入口，陪你理解關係裡的情緒，看見自己的反應與需要，整理此刻的自己。
            </p>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '16px' }}>快速連結</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#about" style={{ color: 'var(--color-muted-grey)', textDecoration: 'none' }}>關於有序</a>
              <a href="#services" style={{ color: 'var(--color-muted-grey)', textDecoration: 'none' }}>服務說明</a>
              <a href="#consultation" style={{ color: 'var(--color-muted-grey)', textDecoration: 'none' }}>公益諮詢</a>
              <a href="#faq" style={{ color: 'var(--color-muted-grey)', textDecoration: 'none' }}>常見問題</a>
            </div>
          </div>

          {/* Social Channels */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '16px' }}>官方社群</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href={LINE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'var(--color-cream-light)', 
                  textDecoration: 'none',
                  background: 'rgba(16, 82, 67, 0.4)',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <MessageCircle size={18} style={{ color: 'var(--color-bright-yellow)' }} />
                <span>LINE 官方帳號 (@545trppy)</span>
              </a>

              <a 
                href={IG_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'var(--color-muted-grey)', 
                  textDecoration: 'none',
                  padding: '4px 8px'
                }}
              >
                {/* Clean SVG for Instagram */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram (@yousee_rainbow_numen)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(240, 245, 207, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem'
        }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} 有序 YouSee. All rights reserved.
          </p>
          <p style={{ margin: 0, color: 'rgba(174, 176, 177, 0.7)' }}>
            本站所有服務為自我覺察與整理輔助工具，非醫療與心理諮商行為。
          </p>
        </div>

      </div>
    </footer>
  );
}
