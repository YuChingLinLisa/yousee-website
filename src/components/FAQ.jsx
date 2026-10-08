import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "為什麼需要提供出生資訊？",
    a: "出生資訊是本次彩虹數字解碼的必要資料。資料僅用於本次解碼與諮詢，不公開、不作行銷用途，也不提供給無關的第三方。若不願意提供，也可以選擇不參加本次服務。"
  },
  {
    q: "需要付費嗎？",
    a: "不收取諮詢費用，但需要選擇一個公益機構完成捐款。捐款會直接提供給該公益機構，不會經過有序。"
  },
  {
    q: "一定要先想好問題嗎？",
    a: "不需要。帶著你最近最想理解的狀態來就可以，不必先把故事整理完整。"
  },
  {
    q: "這是心理諮商嗎？",
    a: "不是。彩虹數字是自我覺察與整理的工具，不能取代醫療、心理治療或其他專業服務。如果目前身心狀態非常不舒服，建議優先尋求適合的專業協助。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section">
      <div className="container container-narrow">
        
        {/* 只回答：我還有什麼必要疑問？ */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 className="section-title">
            常見問題
          </h2>
        </div>

        <div className="glass-card" style={{ padding: '8px 32px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-trigger" 
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span style={{ paddingRight: '16px' }}>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>
                {isOpen && (
                  <div className="faq-content">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
