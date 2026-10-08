import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const LINE_BOOKING_URL = "https://line.me/R/oaMessage/@545trppy/?我想預約有序的公益諮詢";

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        {/* Brand Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>有序 YouSee</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className="font-serif" 
          style={{ 
            fontSize: 'clamp(2.4rem, 5vw, 4rem)', 
            marginBottom: '24px',
            color: 'var(--text-primary)',
            letterSpacing: '0.04em',
            lineHeight: 1.25
          }}
        >
          陪你翻譯關係裡的情緒
        </h1>

        {/* Subtitle */}
        <p 
          style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
            color: 'var(--color-cream-light)', 
            maxWidth: '680px', 
            margin: '0 auto 20px auto',
            lineHeight: 1.7,
            opacity: 0.95
          }}
        >
          以彩虹數字為入口，理解自己在關係中的感受、反應與需要，整理此刻的自己。
        </p>

        {/* Note / Boundary */}
        <p 
          style={{ 
            fontSize: '0.95rem', 
            color: 'var(--color-muted-grey)', 
            maxWidth: '560px', 
            margin: '0 auto 40px auto',
            lineHeight: 1.6
          }}
        >
          不是算命，也不是替你預測命運，而是一種陪你多看見自己的自我覺察工具。
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href={LINE_BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <span>預約公益諮詢</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href="#about" 
            className="btn btn-secondary"
          >
            <span>認識有序</span>
          </a>
        </div>

      </div>
    </section>
  );
}