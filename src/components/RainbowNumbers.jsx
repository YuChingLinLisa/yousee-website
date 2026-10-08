import React from 'react';
import { Layers, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function RainbowNumbers() {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.45)' }}>
      <div className="container container-narrow">
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">
            <span>覺察的入口</span>
          </div>
          <h2 className="section-title">
            彩虹數字，是理解自己的其中一個入口
          </h2>
          <div className="section-desc">
            <p style={{ marginBottom: '16px' }}>
              彩虹數字會從你的出生年月日與出生時間出發，整理你在不同情境中的行為傾向、情緒反應與生命階段。
            </p>
            <p style={{ marginBottom: '16px' }}>
              它不是算命，也不是替你預測命運，而是一種自我覺察的工具。
            </p>
            <p>
              透過數字，我們一起多看見一個角度：理解自己為什麼會這樣反應，也思考現在的你，是否有其他更適合的選擇。
            </p>
          </div>
        </div>

        {/* 3 Main Keys */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {[
            { title: "理解行為慣性", desc: "看見自己在面對壓力或特定事件時，習慣性的第一反應。" },
            { title: "看見關係中的情緒", desc: "釐清你在親密、家庭或職場互動中，反覆出現的心理感受。" },
            { title: "整理此刻的選擇", desc: "跳脫盲目重蹈覆轍，為眼前的十字路口梳理適合的方向。" }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="glass-card" 
              style={{ 
                padding: '24px', 
                borderLeft: '3px solid var(--color-bright-yellow)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-bright-yellow)' }} />
                <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{item.title}</h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-grey)', margin: 0, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Essential Safe Boundary Alert */}
        <div 
          style={{
            background: 'rgba(172, 14, 14, 0.08)',
            border: '1px solid rgba(172, 14, 14, 0.35)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            textAlign: 'left'
          }}
        >
          <ShieldAlert size={24} style={{ color: '#ff7575', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#ffb3b3', lineHeight: 1.7 }}>
            <strong>重要提醒：</strong>
            彩虹數字是陪你自我覺察與整理的工具，不能取代醫療、心理治療或其他專業服務。如果目前身心處於強烈不適狀態，建議優先尋求正規醫療或心理諮商協助。
          </p>
        </div>

      </div>
    </section>
  );
}