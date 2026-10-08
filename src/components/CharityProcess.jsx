import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const GOOGLE_FORM_URL = "https://forms.gle/LV6H4V3QidUcDAdp8";

export default function CharityProcess() {
  return (
    <section id="charity" className="section">
      <div className="container container-narrow">
        
        {/* 只回答：我要怎麼參加？ */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 className="section-title">
            用支持公益的方式，替自己留一段時間
          </h2>
          <div className="section-desc" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <p style={{ margin: 0 }}>
              這次諮詢不收取費用，邀請你選擇一個認同的公益機構完成捐款。捐款會直接提供給公益機構，不會經過有序，也不由有序代收。
            </p>
          </div>
        </div>

        {/* 一條清楚的四步流程 */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '24px 32px', 
            textAlign: 'center', 
            marginBottom: '32px' 
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '1.05rem',
            color: 'var(--color-cream-light)',
            fontWeight: 500,
            marginBottom: '12px'
          }}>
            <span>填寫表單</span>
            <span style={{ color: 'var(--color-bright-yellow)' }}>→</span>
            <span>完成捐款</span>
            <span style={{ color: 'var(--color-bright-yellow)' }}>→</span>
            <span>回傳截圖</span>
            <span style={{ color: 'var(--color-bright-yellow)' }}>→</span>
            <span>安排諮詢</span>
          </div>

          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-muted-grey)' }}>
            公益機構與捐款方式會在預約表單中說明。
          </p>
        </div>

        {/* 按鈕 */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href={GOOGLE_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '14px 36px' }}
          >
            <span>填寫預約表單</span>
            <ExternalLink size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
