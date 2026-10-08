import React from 'react';
import { Compass, Sparkles, SlidersHorizontal } from 'lucide-react';

const coreFeatures = [
  {
    icon: <Compass size={28} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "看見自己的反應",
    desc: "理解自己在關係裡如何感受、表達與保護自己，看懂那些下意識的防衛或退縮。"
  },
  {
    icon: <Sparkles size={28} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "翻譯情緒背後的需要",
    desc: "不急著否定情緒，而是一起看看情緒想告訴你的事情，釐清自己心底真正渴望的連結。"
  },
  {
    icon: <SlidersHorizontal size={28} style={{ color: 'var(--color-bright-yellow)' }} />,
    title: "找回選擇的空間",
    desc: "當你理解自己，就能少一點自動化的受挫反應，多一點適合自己、更踏實的應對選擇。"
  }
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <span>ABOUT YOUSEE</span>
          </div>
          <h2 className="section-title">
            關於有序
          </h2>
          <div className="section-desc">
            <p style={{ marginBottom: '16px' }}>
              我們都曾在關係裡感到困惑。明明在意，卻不知道該怎麼說；明明想靠近，卻一次次退開；明明知道自己不想這樣，卻又重複做出熟悉的反應。
            </p>
            <p style={{ marginBottom: '16px' }}>
              有序相信，這些情緒與行為背後，都有值得被理解的脈絡。
            </p>
            <p style={{ color: 'var(--color-cream-light)' }}>
              我們以彩虹數字為入口，陪你看見自己在關係、工作與生活中的慣性，理解那些反覆出現的感受與選擇，讓你在重要時刻，多一個看見自己的角度。
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {coreFeatures.map((feat, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ 
                borderTop: '3px solid var(--color-secondary-teal)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(16, 82, 67, 0.4)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: 0 }}>
                {feat.title}
              </h3>
              <p style={{ color: 'var(--color-muted-grey)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: 0 }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
