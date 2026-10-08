import React from 'react';
import { HeartHandshake, Eye, MessageCircleQuestion, HelpCircle } from 'lucide-react';

const resonanceItems = [
  {
    icon: <MessageCircleQuestion size={24} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "我總是在關係裡想很多",
    desc: "反覆推敲對方的每一句話與冷淡，在心裡演練了千百種可能，卻越來越感到焦慮。"
  },
  {
    icon: <HeartHandshake size={24} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "我不知道怎麼表達自己的需要",
    desc: "習慣先照顧別人的感受、當一個懂事的人，直到委屈累積成沈重的情緒。"
  },
  {
    icon: <Eye size={24} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "我想靠近，卻又害怕受傷",
    desc: "渴望深刻真實的連結，但只要關係稍微靠近，防衛機制就習慣性先轉身退開。"
  },
  {
    icon: <HelpCircle size={24} style={{ color: 'var(--color-bright-yellow)' }} />,
    text: "我想更了解自己為什麼會這樣反應",
    desc: "明明知道自己不想這樣生氣或退縮，卻在特定情境下，一次次回到熟悉的模式。"
  }
];

export default function Resonance() {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.4)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <span>關係裡的感受</span>
          </div>
          <h2 className="section-title">
            你是否也曾在關係裡，感到困惑？
          </h2>
          <div className="section-desc">
            <p style={{ marginBottom: '8px' }}>明明很在意，卻不知道該怎麼說；想要靠近，卻又習慣先保護自己；</p>
            <p style={{ marginBottom: '8px' }}>有些情緒反覆出現，卻始終說不清楚。明明知道自己不想這樣反應，卻一次次回到熟悉的模式。</p>
            <p style={{ color: 'var(--color-cream-light)', marginTop: '16px', fontWeight: 400 }}>
              有序相信，這些感受不是需要被急著否定的問題，而是值得被理解的訊息。
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {resonanceItems.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(248, 227, 71, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 0 }}>
                {item.text}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-muted-grey)', lineHeight: 1.6, marginBottom: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
