import React from 'react';
import { MessageCircleQuestion, HeartHandshake, HelpCircle } from 'lucide-react';

const cards = [
  {
    icon: <MessageCircleQuestion size={22} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "我總是在關係裡想很多"
  },
  {
    icon: <HeartHandshake size={22} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "我不知道怎麼表達自己的需要"
  },
  {
    icon: <HelpCircle size={22} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "我想更了解自己為什麼會這樣反應"
  }
];

export default function Resonance() {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.4)' }}>
      <div className="container container-narrow">
        
        {/* 只回答：你理解我的狀態嗎？ */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">
            你是否也曾在關係裡，感到困惑？
          </h2>
          <div className="section-desc" style={{ marginBottom: '32px' }}>
            <p style={{ margin: 0 }}>
              明明很在意，卻不知道該怎麼說；想靠近，卻又習慣先保護自己。有些情緒反覆出現，卻始終說不清楚。
            </p>
          </div>
        </div>

        {/* 3 張精簡卡片（只顯示標題） */}
        <div className="resonance-cards-grid">
          {cards.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ 
                padding: '24px 20px', 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(248, 227, 71, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.08rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* 結尾句 */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-cream-light)', fontSize: '1.05rem', margin: 0, fontWeight: 400 }}>
            有序相信，這些感受不是需要被急著修正的問題，是值得被理解的訊息。
          </p>
        </div>

      </div>

      <style>{`
        .resonance-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }
        @media (max-width: 860px) {
          .resonance-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
