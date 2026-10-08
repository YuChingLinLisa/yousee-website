import React from 'react';
import { Compass, Sparkles, SlidersHorizontal } from 'lucide-react';

const shortItems = [
  {
    icon: <Compass size={24} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "看見自己的反應",
    desc: "理解自己在關係裡如何感受、表達與保護自己。"
  },
  {
    icon: <Sparkles size={24} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "理解情緒背後的需要",
    desc: "不急著否定情緒，先看看它想告訴你的事情。"
  },
  {
    icon: <SlidersHorizontal size={24} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "整理此刻的選擇",
    desc: "在重要時刻，多一個理解自己與思考方向的角度。"
  }
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* 只回答：你怎麼陪我？ */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 className="section-title">
            有序，陪你多看見一點自己
          </h2>
          <div className="section-desc" style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <p style={{ marginBottom: '14px' }}>
              關係裡的情緒，常常不是突然出現的。它可能和我們習慣如何理解自己、保護自己，以及與他人互動的方式有關。
            </p>
            <p style={{ marginBottom: '14px' }}>
              彩虹數字會從你的出生資料出發，整理你在不同情境中的行為傾向與情緒反應。
            </p>
            <p style={{ color: 'var(--color-cream-light)', margin: 0 }}>
              透過這個角度，我們一起看看：你為什麼會這樣反應，以及現在的你，是否有更適合自己的選擇。
            </p>
          </div>
        </div>

        {/* 三個短項目：強制桌面版 3 欄並排 */}
        <div className="three-cards-grid">
          {shortItems.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(16, 82, 67, 0.4)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.18rem', color: 'var(--text-primary)', margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-muted-grey)', lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .three-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 860px) {
          .three-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
