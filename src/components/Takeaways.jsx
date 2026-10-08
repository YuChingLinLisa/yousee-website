import React from 'react';
import { Sparkles, Compass, Lightbulb, Heart, ArrowUpRight } from 'lucide-react';

const outcomes = [
  {
    icon: <Sparkles size={20} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "對目前的情緒多一個理解的角度"
  },
  {
    icon: <Compass size={20} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "看見自己在關係裡的慣性反應模式"
  },
  {
    icon: <Heart size={20} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "理解情緒背後真實的自我需要"
  },
  {
    icon: <Lightbulb size={20} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "一個可以帶回生活繼續自我覺察的方向"
  },
  {
    icon: <ArrowUpRight size={20} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "對當下重要選擇更清楚的梳理"
  }
];

export default function Takeaways() {
  return (
    <section className="section">
      <div className="container container-narrow">
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">
            <span>TAKEAWAYS</span>
          </div>
          <h2 className="section-title">
            結束後，你可能會帶走
          </h2>
          <p className="section-desc">
            每場諮詢都是一場獨特的探索。依據你當下的生命狀態，你有機會在對話中收穫：
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {outcomes.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                padding: '20px 24px'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(248, 227, 71, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
