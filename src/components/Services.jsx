import React from 'react';
import { FileCode, Users, Video, Compass, ExternalLink } from 'lucide-react';

const Services = () => {
  return (
    <section id="service" className="section" style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="container">
        {/* 標題區：強化系統感與釐清的體感 */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, letterSpacing: '0.05em' }}>讀懂行為原始碼 優化決策路徑</h2>
          <p style={{ maxWidth: '700px', margin: '20px auto 0', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '2.0', letterSpacing: '0.03em' }}>
            透過系統化的解碼服務，深入探索內在設定，讓「有序」協助你從混沌中釐清脈絡。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>

          {/* 服務一：密碼檔案程式 (完全移除生命、人生、天賦字眼) */}
          <div className="glass" style={{ padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ marginBottom: '28px', display: 'inline-flex', padding: '16px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.05)' }}>
              <Users size={32} color="var(--color-secondary)" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: '16px', color: 'white', letterSpacing: '0.05em' }}>關係解碼</h3>
            <p style={{ flex: 1, color: 'rgba(255,255,255,0.6)', lineHeight: '2.0', fontSize: '0.95rem' }}>
              衝突常源於邏輯不相容。透過合盤拆解溝通與安全感的落差，釐清行為地雷，將摩擦轉化為理性交流，讓重要關係回歸穩定、有序的頻率
            </p>
          </div>

          {/* 服務二：1對1 深度解碼 (完全移除生命、人生、天賦字眼) */}
          <div className="glass" style={{
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'linear-gradient(180deg, rgba(16,82,67,0.7) 0%, rgba(172,14,14,0.1) 100%)'
          }}>
            <div style={{ marginBottom: '28px', display: 'inline-flex', padding: '16px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)' }}>
              <FileCode size={32} color="var(--color-secondary)" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: '16px', color: 'white', letterSpacing: '0.05em' }}>心性解碼</h3>
            <p style={{ flex: 1, color: 'rgba(255,255,255,0.9)', lineHeight: '2.0', fontSize: '0.95rem' }}>
              透過出生日期解析行為程式，客觀梳理你的優勢特質、壓力反應與決策慣性。找回個人說明書，用最省力的方式在生活中發揮實力
            </p>
          </div>

          {/* 服務三：不定期沙龍 (性質調整：認識自己與數字) */}
          <div className="glass" style={{ padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ marginBottom: '28px', display: 'inline-flex', padding: '16px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.05)' }}>
              <Compass size={32} color="var(--color-secondary)" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: '16px', color: 'white', letterSpacing: '0.05em' }}>時間解碼</h3>
            <p style={{ flex: 1, color: 'rgba(255,255,255,0.6)', lineHeight: '2.0', fontSize: '0.95rem' }}>
              努力更要看準時機。解析流年位格，判斷適合「開拓」或「深耕」的發展節奏。掌握年度戰略週期，讓行動精準對焦，不再盲目努力
            </p>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <a
            href="https://line.me/R/oaMessage/@545trppy/?預約諮詢"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            立即預約 <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section >
  );
};

export default Services;