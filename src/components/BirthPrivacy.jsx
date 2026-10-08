import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export default function BirthPrivacy() {
  return (
    <section className="section" style={{ backgroundColor: 'rgba(0, 36, 40, 0.4)' }}>
      <div className="container container-narrow">
        
        <div className="glass-card" style={{ padding: '36px 32px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(16, 82, 67, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-bright-yellow)'
            }}>
              <ShieldCheck size={24} />
            </div>
            <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>
              關於出生資訊與隱私說明
            </h2>
          </div>

          <div style={{ color: 'var(--color-cream-light)', fontSize: '0.96rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ margin: 0 }}>
              彩虹數字解碼需要使用你的<strong>西元出生年月日與出生時間</strong>，作為本次諮詢的必要資料。
            </p>
            <p style={{ margin: 0, color: 'var(--color-muted-grey)' }}>
              這些資訊僅用於本次彩虹數字解碼與諮詢對話，<strong>不公開、不作行銷用途，也不提供給無關的第三方</strong>。
            </p>
            <p style={{ margin: 0, color: 'var(--color-muted-grey)' }}>
              若你不願意提供出生資訊，也可以選擇不參加本次服務。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
