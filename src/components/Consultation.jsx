import React from 'react';
import { Clock, Gift, Video, CheckCircle, ArrowRight } from 'lucide-react';

const suitableFor = [
  "正在一段關係裡感到卡住",
  "有些情緒反覆出現，卻說不清楚原因",
  "想了解自己在關係裡的反應與需要",
  "正面臨一個選擇，想多看見自己的狀態",
  "想用一個溫柔、具體的方式整理自己"
];

const topics = [
  "最近讓你感到困惑的一段關係",
  "反覆出現的情緒與反應",
  "你在關係裡習慣如何保護自己",
  "你真正想表達、卻還說不出口的需要",
  "目前正在面對的選擇或人生階段",
  "接下來可以如何更理解自己"
];

const steps = [
  {
    phase: "開始",
    title: "從你最近最想整理的事情出發",
    desc: "不需要先把問題想完整，從當下的狀態開始就好。"
  },
  {
    phase: "中段",
    title: "透過彩虹數字多看見一個角度",
    desc: "理解你的情緒、反應與關係互動模式。"
  },
  {
    phase: "結尾",
    title: "整理你想帶回生活的理解",
    desc: "把這次看見的事情，轉化成之後可以繼續覺察的方向。"
  }
];

export default function Consultation() {
  return (
    <section id="consultation" className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <span>CHARITY CONSULTATION</span>
          </div>
          <h2 className="section-title">
            給自己一段整理的時間
          </h2>
          <div className="section-desc">
            <p style={{ marginBottom: '12px' }}>
              如果你最近正處在一段關係的困惑裡，或有些情緒還說不清楚，歡迎透過公益諮詢，陪自己停下來看一看。
            </p>
            <p style={{ color: 'var(--color-cream-light)' }}>
              這是一場 <strong>40 分鐘的線上公益諮詢</strong>。有序不收取諮詢費用，邀請你選擇一個認同的公益機構完成捐款，讓這次對話也成為一份支持。
            </p>
          </div>
        </div>

        {/* Feature Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-bright-yellow)', background: 'rgba(16, 82, 67, 0.6)', padding: '10px 20px', borderRadius: '99px', border: '1px solid var(--border-subtle)' }}>
            <Clock size={18} />
            <span style={{ fontSize: '0.95rem' }}>40 分鐘一對一</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-bright-yellow)', background: 'rgba(16, 82, 67, 0.6)', padding: '10px 20px', borderRadius: '99px', border: '1px solid var(--border-subtle)' }}>
            <Video size={18} />
            <span style={{ fontSize: '0.95rem' }}>Google Meet 線上進行</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-bright-yellow)', background: 'rgba(16, 82, 67, 0.6)', padding: '10px 20px', borderRadius: '99px', border: '1px solid var(--border-subtle)' }}>
            <Gift size={18} />
            <span style={{ fontSize: '0.95rem' }}>自主公益捐款參與</span>
          </div>
        </div>

        {/* 2 Columns: Suitable & Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {/* Column 1 */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>這場諮詢適合最近的你，如果：</span>
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {suitableFor.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-bright-yellow)', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: 'var(--color-cream-light)', fontSize: '0.96rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>40 分鐘可能一起整理的內容：</span>
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {topics.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-bright-yellow)', marginTop: '9px', flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-muted-grey)', fontSize: '0.96rem' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '20px', fontSize: '0.88rem', color: 'var(--color-muted-grey)', fontStyle: 'italic', marginBottom: 0 }}>
              * 實際內容會依照你當下最想整理的主題彈性調整。
            </p>
          </div>
        </div>

        {/* 3 Step Consultation Flow */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>諮詢進行方式</h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card" style={{ textAlign: 'center', padding: '30px 24px' }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(248, 227, 71, 0.1)',
                color: 'var(--color-bright-yellow)',
                border: '1px solid rgba(248, 227, 71, 0.25)',
                padding: '4px 16px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                {step.phase}
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-muted-grey)', lineHeight: 1.6, marginBottom: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
