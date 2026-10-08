import React from 'react';
import { HeartHandshake, ArrowRight, ExternalLink } from 'lucide-react';

const GOOGLE_FORM_URL = "https://forms.gle/LV6H4V3QidUcDAdp8";

const flowSteps = [
  { step: "1", title: "填寫預約表單", desc: "留下基本聯絡資訊與出生資料" },
  { step: "2", title: "自主完成捐款", desc: "自由選擇任一認同的公益機構捐款" },
  { step: "3", title: "回傳捐款截圖", desc: "透過 LINE 官方帳號回傳證明" },
  { step: "4", title: "安排線上諮詢", desc: "確認時間並提供 Google Meet 連結" }
];

export default function CharityProcess() {
  return (
    <section id="charity" className="section">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <span>CHARITY DONATION</span>
          </div>
          <h2 className="section-title">
            用支持公益的方式，替自己留一段時間
          </h2>
          <div className="section-desc">
            <p style={{ marginBottom: '12px' }}>
              這次諮詢不收取費用，邀請你選擇一個認同的公益機構完成捐款。
            </p>
            <p style={{ color: 'var(--color-cream-light)' }}>
              捐款會直接提供給你選擇的公益機構，不會經過有序，也不由有序代收。
            </p>
          </div>
        </div>

        {/* 4 Flow Steps Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '48px'
        }}>
          {flowSteps.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ textAlign: 'center', padding: '28px 20px', position: 'relative' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--color-bright-yellow)',
                color: '#002428',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted-grey)', margin: 0, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Form Action Box */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href={GOOGLE_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            <span>填寫預約表單</span>
            <ExternalLink size={18} />
          </a>
          <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--color-muted-grey)' }}>
            * 預約後我們將透過 LINE 官方帳號與你確認時間安排
          </p>
        </div>

      </div>
    </section>
  );
}
