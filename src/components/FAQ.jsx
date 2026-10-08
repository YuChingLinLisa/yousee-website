import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "一定要提供出生時間嗎？",
    a: "是的，出生年月日與出生時間是本次彩虹數字解碼的必要資料。"
  },
  {
    q: "需要付費嗎？",
    a: "不收取諮詢費用，但需要選擇一個公益機構完成捐款。"
  },
  {
    q: "捐款會交給有序嗎？",
    a: "不會。捐款會直接交給你選擇的公益機構，不會經過有序，也不由有序代收。"
  },
  {
    q: "一定要先想好問題嗎？",
    a: "不需要。帶著你最近最想理解的狀態來就可以，不必先把故事整理得很完整。"
  },
  {
    q: "這是心理諮商嗎？",
    a: "不是。彩虹數字是自我覺察與整理的工具，不能取代醫療、心理治療或其他專業服務。如果目前身心狀態非常不舒服，建議優先尋求適合的專業協助。"
  },
  {
    q: "諮詢是線上還是實體？",
    a: "目前為 40 分鐘線上諮詢。實際視訊連結與時間，會在預約確認後提供。"
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
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">
            <span>FAQ</span>
          </div>
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
