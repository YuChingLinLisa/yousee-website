import React from 'react';
import { ArrowRight } from 'lucide-react';

const LINE_BOOKING_URL = "https://line.me/R/oaMessage/@545trppy/?我想預約有序的公益諮詢";

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '140px', paddingBottom: '90px' }}>
      <div className="container" style={{ textAlign: 'center' }}>

        {/* 主標：只回答「有序是誰？」 */}
        <h1 
          className="font-serif" 
          style={{ 
            fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)', 
            marginBottom: '28px',
            color: 'var(--text-primary)',
            letterSpacing: '0.12em',
            lineHeight: 1.45
          }}
        >
          <span>陪你翻譯</span>
          <br />
          <span>關係裡的情緒</span>
        </h1>

        {/* 副標 */}
        <p 
          style={{ 
            fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)', 
            color: 'var(--color-cream-light)', 
            maxWidth: '680px', 
            margin: '0 auto 20px auto',
            lineHeight: 1.8,
            letterSpacing: '0.08em',
            opacity: 0.95
          }}
        >
          以彩虹數字為入口，整理此刻的自己。
        </p>

        {/* 邊界說明 */}
        <p 
          style={{ 
            fontSize: '0.98rem', 
            color: 'var(--color-muted-grey)', 
            maxWidth: '580px', 
            margin: '0 auto 44px auto',
            lineHeight: 1.8,
            letterSpacing: '0.06em'
          }}
        >
          彩虹數字是一套自我覺察的工具，不是算命，也不是預測命運。
        </p>

        {/* 按鈕 */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href={LINE_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ letterSpacing: '0.08em' }}
          >
            <span>預約公益諮詢</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href="#about" 
            className="btn btn-secondary"
            style={{ letterSpacing: '0.08em' }}
          >
            <span>了解有序</span>
          </a>
        </div>

      </div>
    </section>
  );
}