import React from 'react';
import { ArrowRight } from 'lucide-react';

const LINE_BOOKING_URL = "https://line.me/R/oaMessage/@545trppy/?我想預約有序的公益諮詢";

export default function FinalCTA() {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(16, 82, 67, 0.35)', textAlign: 'center', padding: '90px 0' }}>
      <div className="container container-narrow">
        
        {/* 只回答：我要下一步做什麼？ */}
        <h2 
          className="font-serif"
          style={{ 
            fontSize: 'clamp(1.8rem, 3.8vw, 2.5rem)', 
            marginBottom: '20px', 
            color: 'var(--text-primary)',
            letterSpacing: '0.08em'
          }}
        >
          讓理解自己，成為關係改變的開始
        </h2>

        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--color-cream-light)', 
          maxWidth: '560px', 
          margin: '0 auto 36px auto',
          lineHeight: 1.8,
          letterSpacing: '0.05em'
        }}>
          不需要先把故事整理完整，從你此刻最想理解的地方開始就好。
        </p>

        <div>
          <a 
            href={LINE_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.05rem', padding: '15px 38px', letterSpacing: '0.08em' }}
          >
            <span>預約公益諮詢</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
