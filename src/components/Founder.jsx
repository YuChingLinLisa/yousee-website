import React from 'react';

export default function Founder() {
  return (
    <section id="founder" className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.45)' }}>
      <div className="container container-narrow">
        
        {/* 只回答：誰在陪我？ */}
        <div className="glass-card" style={{ padding: 'clamp(28px, 4vw, 48px)', textAlign: 'center' }}>
          
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '24px' }}>
            有序，從一段理解自己的旅程開始
          </h2>

          <div style={{ color: 'var(--color-cream-light)', lineHeight: 1.85, fontSize: '1rem', maxWidth: '640px', margin: '0 auto 28px auto' }}>
            <p style={{ marginBottom: '16px' }}>
              我曾經也在關係裡反覆困惑，直到透過彩虹數字，開始理解情緒與反應背後的脈絡。
            </p>
            <p style={{ margin: 0 }}>
              有序不是要你變成一個完美的人，是陪你在每一次看見之後，更靠近自己一點。
            </p>
          </div>

          {/* 引言記憶點 */}
          <div style={{
            display: 'inline-block',
            color: 'var(--color-bright-yellow)',
            fontSize: '1.08rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.08em',
            marginBottom: '28px'
          }}>
            「現在的我，需要什麼？」
          </div>

          {/* 主理人資訊 */}
          <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
              小茜｜有序主理人
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--color-muted-grey)', marginTop: '4px' }}>
              彩虹數字學會認證諮詢師
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
