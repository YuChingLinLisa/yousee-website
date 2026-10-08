import React from 'react';
import { Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.45)' }}>
      <div className="container container-narrow">
        
        <div className="glass-card" style={{ padding: 'clamp(32px, 5vw, 60px)', position: 'relative' }}>
          
          <div style={{ position: 'absolute', top: '30px', right: '36px', opacity: 0.15 }}>
            <Quote size={80} style={{ color: 'var(--color-bright-yellow)' }} />
          </div>

          <div className="section-tag" style={{ marginBottom: '24px' }}>
            <span>BRAND STORY</span>
          </div>

          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '32px' }}>
            我也曾經，在關係裡反覆迷路
          </h2>

          <div style={{ color: 'var(--color-cream-light)', lineHeight: 1.85, fontSize: '1.02rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ margin: 0 }}>
              過去的我，也曾經在關係裡反覆困惑。
            </p>
            <p style={{ margin: 0 }}>
              我試著和朋友聊、尋找不同的答案，也曾努力說服自己不要想太多，但心裡的疑問並沒有因此消失。
            </p>
            <p style={{ margin: 0 }}>
              後來，我遇見彩虹數字，開始從另一個角度理解自己：原來那些反覆出現的情緒與反應，不一定代表我做錯了，而是有一些內在的脈絡，正在等待被看見。
            </p>
            
            <div style={{
              background: 'rgba(16, 82, 67, 0.5)',
              borderLeft: '3px solid var(--color-bright-yellow)',
              padding: '16px 20px',
              borderRadius: '0 12px 12px 0',
              margin: '10px 0'
            }}>
              <p style={{ color: 'var(--color-bright-yellow)', fontWeight: 500, margin: 0, fontSize: '1.05rem', lineHeight: 1.7 }}>
                當我開始理解自己，就不再只問「為什麼我會這樣」，而是慢慢練習問自己：<br />
                「現在的我，需要什麼？」<br />
                「還有沒有一種更適合我的選擇？」
              </p>
            </div>

            <p style={{ margin: 0 }}>
              有序不是要你變成一個完美的人，而是陪你在每一次看見之後，更靠近自己一點。
            </p>
          </div>

          {/* Founder Signature Info */}
          <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                小茜｜有序主理人
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-bright-yellow)', marginTop: '4px' }}>
                彩虹數字學會認證諮詢師
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
