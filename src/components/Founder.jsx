import React from 'react';
import { Quote, Compass } from 'lucide-react';

const Founder = () => {
  return (
    <section id="founder" className="section" style={{ background: 'rgba(172, 14, 14, 0.02)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* 引言圖示 */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ padding: '16px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'inline-flex' }}>
              <Quote size={32} color="var(--color-secondary)" />
            </div>
          </div>

          <div className="glass" style={{ padding: '48px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, textAlign: 'center', marginBottom: '40px', letterSpacing: '0.05em' }}>
              從混亂的重複劇本中，<br />看見 <span style={{ color: 'var(--color-secondary)', fontWeight: 400 }}>有序</span> 的可能
            </h2>

            <div style={{ fontSize: '1.05rem', lineHeight: '2.2', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.03em' }}>
              <p style={{ marginBottom: '24px' }}>
                過去的我，也曾在關係中不斷經歷「重複的失敗劇本」。那時我覺得人生是混亂且不可控的，我試過與朋友談心、預約心理諮商、甚至走遍廟宇祈求平靜，但內心的雜訊始終沒有停歇。
              </p>

              <p style={{ marginBottom: '24px' }}>
                直到兩年前，我遇見了這套生命程式的幾何語言。
              </p>

              <p style={{ marginBottom: '24px' }}>
                我才驚覺，原來那些我以為的「缺點」，其實只是<strong style={{ color: 'white', fontWeight: 500 }}>低階慣性的能量掙扎</strong>。透過解碼，我學會在關鍵時刻暫停自動導航，從「不理解自己」轉向<span style={{ borderBottom: '1px solid var(--color-secondary)' }}>「原來這很正常」</span>，並在理解中替自己做出更適合的選擇。
              </p>

              <p style={{ marginBottom: '48px' }}>
                「有序」不是一種完美狀態，而是一套<strong>持續修正行為的工具</strong>。這兩年來，我將這套邏輯落實於自己的生命實驗中。現在，我想陪你一起找回屬於你的內在秩序。
              </p>
            </div>

            {/* 修改後的行動引導：導向 2026 戰略圖文 */}
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>
                如果你也想在 2026 年找回主導權，這是我為你準備的第一份導航禮物：
              </p>

              <a 
                href="https://line.me/R/oaMessage/@545trppy/?領取2026能量關鍵字" 
                className="btn btn-solid"
              >
                <Compass size={20} />
                立即領取 2026 年度行為戰略圖 ➔
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
