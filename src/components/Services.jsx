import React from 'react';
import { ArrowRight, Lock, Sparkles, Heart } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <span>START HERE</span>
          </div>
          <h2 className="section-title">
            你現在，想理解哪一部分的自己？
          </h2>
          <div className="section-desc">
            <span style={{ 
              display: 'inline-block',
              background: 'rgba(248, 227, 71, 0.12)', 
              color: 'var(--color-bright-yellow)', 
              padding: '6px 18px', 
              borderRadius: '99px',
              fontSize: '0.95rem',
              fontWeight: 500,
              border: '1px solid rgba(248, 227, 71, 0.3)'
            }}>
              ✨ 目前開放：40 分鐘線上公益諮詢
            </span>
          </div>
        </div>

        {/* 3 Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          alignItems: 'stretch'
        }}>
          
          {/* Card 1: Main Highlighted Service */}
          <div 
            className="glass-card" 
            style={{
              position: 'relative',
              background: 'rgba(16, 82, 67, 0.65)',
              border: '2px solid var(--color-bright-yellow)',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{
                  background: 'var(--color-bright-yellow)',
                  color: '#002428',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}>
                  目前主要開放
                </span>
                <Heart size={20} style={{ color: 'var(--color-bright-yellow)' }} />
              </div>

              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                關係裡的情緒
              </h3>
              
              <p style={{ color: 'var(--color-cream-light)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: 0 }}>
                當你在一段關係裡反覆感到委屈、焦慮、憤怒或靠近不了，陪你理解彼此的互動模式，看見情緒背後的需要。
              </p>
            </div>

            <a 
              href="#consultation" 
              className="btn btn-primary"
              style={{ width: '100%', boxSizing: 'border-box' }}
            >
              <span>了解公益諮詢</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 2: Future Release */}
          <div 
            className="glass-card" 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              opacity: 0.85
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{
                  background: 'rgba(174, 176, 177, 0.15)',
                  color: 'var(--color-muted-grey)',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(174, 176, 177, 0.2)'
                }}>
                  後續開放
                </span>
                <Lock size={18} style={{ color: 'var(--color-muted-grey)' }} />
              </div>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                自己的情緒與反應
              </h3>

              <p style={{ color: 'var(--color-muted-grey)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 0 }}>
                陪你整理熟悉的行為慣性，理解自己如何面對壓力、衝突與選擇，慢慢找回對自己的理解。
              </p>
            </div>

            <button 
              disabled
              className="btn btn-outline"
              style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}
            >
              <span>後續開放規劃</span>
            </button>
          </div>

          {/* Card 3: Future Release */}
          <div 
            className="glass-card" 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              opacity: 0.85
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{
                  background: 'rgba(174, 176, 177, 0.15)',
                  color: 'var(--color-muted-grey)',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  border: '1px solid rgba(174, 176, 177, 0.2)'
                }}>
                  後續開放
                </span>
                <Lock size={18} style={{ color: 'var(--color-muted-grey)' }} />
              </div>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                人生階段與選擇
              </h3>

              <p style={{ color: 'var(--color-muted-grey)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 0 }}>
                在工作、關係或人生轉換的時刻，陪你整理目前的狀態，思考什麼是此刻更適合自己的方向。
              </p>
            </div>

            <button 
              disabled
              className="btn btn-outline"
              style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}
            >
              <span>後續開放規劃</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}