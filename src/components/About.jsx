import React from 'react';
import { Compass, Moon, Sun } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, letterSpacing: '0.05em' }}>關於 <span style={{ color: 'var(--color-secondary)', fontWeight: 400 }}>有序</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '2.0', letterSpacing: '0.03em', color: 'rgba(255,255,255,0.7)' }}>在混亂的關係與選擇中，看見生命運行的隱形秩序</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ margin: '0 auto 24px', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={32} color="var(--color-secondary)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.05em' }}>解碼生命程式</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '2.0' }}>出生年月日時分是你來到地球時設定好的生命程式。解讀數字背後的語言，為你釐清脈絡，將迷惘轉化為清晰的生命地圖</p>
          </div>

          <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ margin: '0 auto 24px', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sun size={32} color="var(--color-secondary)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.05em' }}>理解與修正行為</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '2.0' }}>修行，就是在生活中修正自己的行為。看見能量等級，從慣性掙扎轉向高階發揮。當你了解自己的能量與挑戰，選擇權就回到了你的手中</p>
          </div>

          <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ margin: '0 auto 24px', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Moon size={32} color="var(--color-secondary)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.05em' }}>做出適合的選擇</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '2.0' }}>理解內在藍圖，停止心理內耗。協助你在關係與人生轉捩點，對齊內在頻率，做出最適合當下的決定</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
