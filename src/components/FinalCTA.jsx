import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const LINE_BOOKING_URL = "https://line.me/R/oaMessage/@545trppy/?我想預約有序的公益諮詢";

export default function FinalCTA() {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(16, 82, 67, 0.35)', textAlign: 'center' }}>
      <div className="container container-narrow">
        
        <h2 
          className="font-serif"
          style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', 
            marginBottom: '20px', 
            color: 'var(--text-primary)' 
          }}
        >
          讓理解自己，成為關係改變的開始
        </h2>

        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--color-cream-light)', 
          maxWidth: '560px', 
          margin: '0 auto 12px auto',
          lineHeight: 1.8
        }}>
          不需要先把故事整理完整，從你此刻最想理解的地方開始就好。
        </p>

        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--color-muted-grey)', 
          marginBottom: '36px' 
        }}>
          有序陪你從彩虹數字出發，翻譯關係裡的情緒。
        </p>

        <div>
          <a 
            href={LINE_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '16px 40px' }}
          >
            <MessageCircle size={20} />
            <span>預約公益諮詢</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
