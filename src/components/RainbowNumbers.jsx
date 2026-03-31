import React from 'react';

const numbers = [
  { num: 1, color: '#AC0E0E', title: '獨立與專業', desc: '學習從依賴轉向自立，活出開創者的高階專業能量' },
  { num: 2, color: '#F8E347', title: '直覺與溫和', desc: '運用細膩的同理與溝通，在關係中達成優雅的平衡' },
  { num: 3, color: '#AEB0B1', title: '好奇與創意', desc: '釋放內在赤子之心，用靈動的表達力點亮生活靈感' },
  { num: 4, color: '#105243', title: '責任與安定', desc: '建立落實的秩序與安全感，成為生命最堅固的基石' },
  { num: 5, color: '#15372C', title: '自由與熱情', desc: '突破框架與限制，在變動的世界中找尋身心合一' },
];

const RainbowNumbers = () => {
  return (
    <section id="explore" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(248, 227, 71, 0.02) 100%)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>

          {/* 左側：品牌深度介紹 */}
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, marginBottom: '24px', letterSpacing: '0.05em' }}>
              探索生命程式的 <br /><span style={{ color: 'var(--color-secondary)' }}>幾何語言</span>
            </h2>
            <p style={{ marginBottom: '24px', fontSize: '0.95rem', lineHeight: '2.0', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.03em' }}>
              數字即能量，形塑了我們的個性與生命脈絡
            </p>
            <p style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.6)', lineHeight: '2.0', fontSize: '0.95rem', letterSpacing: '0.03em' }}>
              「有序」透過彩虹數字解讀這些隱藏資訊，陪你從慣性的「自動導航」中醒來。這不是算命，而是一場精準修正行為、拿回人生主導權的覺察
            </p>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { text: '辨識能量等級：從低階掙扎轉向高階發揮', iconColor: 'var(--color-primary)' },
                { text: '破解重複劇本：理解關係與人生挑戰的根源', iconColor: 'var(--color-secondary)' },
                { text: '釐清生命脈絡：在關鍵階段做出最適合的選擇', iconColor: 'var(--color-tertiary)' }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: item.iconColor, transform: 'rotate(45deg)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 300, letterSpacing: '0.03em' }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側：數字能量展示 */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {numbers.map((item) => (
              <div key={item.num} className="glass card-hover" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '28px', transition: '0.3s ease' }}>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.15)',
                  textShadow: 'none',
                  lineHeight: 1,
                  minWidth: '70px',
                  textAlign: 'center'
                }}>
                  {item.num}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'white', fontWeight: 400, letterSpacing: '0.05em' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: '1.8' }}>
              ...及更多隱藏在 6-0 與流年位格中的精密代碼<br />
              <a href="https://line.me/R/oaMessage/@545trppy/?領取2026能量關鍵字" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--color-secondary)', fontStyle: 'normal', fontWeight: 400, display: 'inline-block', marginTop: '12px' }}>
                立即領取 2026 流年戰略解析（LINE 限定）
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RainbowNumbers;