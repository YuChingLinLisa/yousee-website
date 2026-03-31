import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at center, rgba(172, 14, 14, 0.05) 0%, transparent 70%)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

          {/* Top Tag - 建立定位 */}
          <div className="fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>
            <Sparkles size={16} color="var(--color-primary)" />
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>大人的人生脈絡指南</span>
          </div>

          {/* Main Hook - 解決痛點 */}
          <h1 className="fade-in-up delay-100" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 300, letterSpacing: '0.05em', lineHeight: '1.4', marginBottom: '32px' }}>
            看見生命程式的<span style={{ color: 'var(--color-secondary)', fontWeight: 400 }}>有序</span><br />
            在關鍵時刻做出<span style={{ color: 'var(--text-main)', borderBottom: '1px solid var(--color-secondary)' }}>合適選擇</span>
          </h1>

          {/* Description - 建立價值 */}
          <p className="fade-in-up delay-200" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: 'rgba(255,255,255,0.7)', lineHeight: '2.0', letterSpacing: '0.03em', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px auto' }}>
            不是算命，而是解開出生年月日時分的程式密碼<br />
            陪你釐清行為慣性與生命階段，將主導權還給自己
          </p>

          {/* CTA Buttons - 引導行動 */}
          <div className="fade-in-up delay-300" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#service" className="btn btn-outline">
              查看各項解碼服務 <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-glass">
              了解有序經營理念
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;