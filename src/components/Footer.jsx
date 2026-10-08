import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

const LINE_URL = "https://line.me/R/oaMessage/@545trppy/?我想預約有序的公益諮詢";
const IG_URL = "https://instagram.com/yousee_rainbow_numen";

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      backgroundColor: '#002428',
      padding: '50px 0 30px 0',
      color: 'var(--color-muted-grey)',
      fontSize: '0.92rem'
    }}>
      <div className="container">
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '36px',
          marginBottom: '40px'
        }}>
          
          {/* Brand Info - 一行簡介 */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <img src="/yousee-logo-light.png" alt="有序 YouSee" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--color-cream-light)', fontSize: '0.94rem' }}>
              以彩虹數字為入口，陪你理解關係裡的情緒，整理此刻的自己。
            </p>
          </div>

          {/* Quick Links - 精簡為 3 個 */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.98rem', marginBottom: '14px', letterSpacing: '0.06em' }}>快速連結</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#about" style={{ color: 'var(--color-muted-grey)', textDecoration: 'none' }}>關於有序</a>
              <a href="#consultation" style={{ color: 'var(--color-muted-grey)', textDecoration: 'none' }}>公益諮詢</a>
              <a href="#faq" style={{ color: 'var(--color-muted-grey)', textDecoration: 'none' }}>常見問題</a>
            </div>
          </div>

          {/* Social Channels */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.98rem', marginBottom: '14px', letterSpacing: '0.06em' }}>官方社群</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href={LINE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'var(--color-cream-light)', 
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={18} style={{ color: 'var(--color-bright-yellow)' }} />
                <span>LINE 官方帳號</span>
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
                  textDecoration: 'none'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(240, 245, 207, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem'
        }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} 有序 YouSee. All rights reserved.
          </p>
          <p style={{ margin: 0, color: 'rgba(174, 176, 177, 0.7)' }}>
            本站服務為自我覺察與整理的輔助工具，非醫療或心理諮商服務。
          </p>
        </div>

      </div>
    </footer>
  );
}
