import React from 'react';
import { Clock, Video, Heart, CheckCircle2, XCircle } from 'lucide-react';

const suitable = [
  "在親密關係裡感到困惑或卡住",
  "想理解自己反覆出現的情緒跟反應",
  "願意從彩虹數字出發多了解自己"
];

const notSuitable = [
  "期待的是心理治療、醫療診斷或危機處理",
  "希望透過諮詢預測未來或替你做決定",
  "不願提供出生資訊"
];

export default function Consultation() {
  return (
    <section id="consultation" className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.4)' }}>
      <div className="container container-narrow">
        
        {/* 只回答：我會得到什麼服務？ */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 className="section-title">
            40 分鐘線上公益諮詢
          </h2>
          <p className="section-desc" style={{ marginBottom: '28px' }}>
            從你最近最想整理的事情出發，透過彩虹數字多看見一個角度，理解關係裡的情緒與自己的反應。
          </p>
        </div>

        {/* 三個資訊標籤 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '44px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-bright-yellow)', background: 'rgba(16, 82, 67, 0.5)', padding: '8px 18px', borderRadius: '100px', border: '1px solid var(--border-subtle)', fontSize: '0.92rem' }}>
            <Clock size={16} />
            <span>40 分鐘一對一</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-bright-yellow)', background: 'rgba(16, 82, 67, 0.5)', padding: '8px 18px', borderRadius: '100px', border: '1px solid var(--border-subtle)', fontSize: '0.92rem' }}>
            <Video size={16} />
            <span>Google Meet 線上進行</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-bright-yellow)', background: 'rgba(16, 82, 67, 0.5)', padding: '8px 18px', borderRadius: '100px', border: '1px solid var(--border-subtle)', fontSize: '0.92rem' }}>
            <Heart size={16} />
            <span>自主選擇公益機構捐款</span>
          </div>
        </div>

        {/* 適合 / 不適合 對照區塊 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}>
          {/* 適合 */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              這場諮詢可能適合你，如果：
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {suitable.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-bright-yellow)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--color-cream-light)', fontSize: '0.94rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 不適合 */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              這場諮詢可能不適合你，如果：
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {notSuitable.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <XCircle size={18} style={{ color: 'var(--color-muted-grey)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--color-muted-grey)', fontSize: '0.94rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 你可以帶著什麼來 & 結尾句 */}
        <div className="glass-card" style={{ textAlign: 'center', padding: '24px', borderLeft: '3px solid var(--color-bright-yellow)' }}>
          <p style={{ color: 'var(--color-cream-light)', fontSize: '1rem', marginBottom: '8px', fontWeight: 500 }}>
            你可以帶著一段關係、一個反覆出現的情緒，或最近正在面對的選擇來。
          </p>
          <p style={{ color: 'var(--color-muted-grey)', fontSize: '0.92rem', margin: 0 }}>
            不需要先把故事整理完整，從你現在最想理解的地方開始就好。
          </p>
        </div>

      </div>
    </section>
  );
}
