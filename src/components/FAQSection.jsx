import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqQuery, setFaqQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqQuery.toLowerCase())
  );

  return (
    <section 
      id="faq"
      style={{
        padding: '5rem 0',
        background: '#FAF8F5',
        borderTop: '1px solid #E2E8F0'
      }}
    >
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Header */}
        <div className="section-header">
          <span className="subtitle">
            <HelpCircle size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Centro de Ayuda
          </span>
          <h2 className="title">Preguntas Frecuentes</h2>
          <p className="description">
            Resuelve tus dudas sobre la toma de suplementos, envíos en México y la red de distribuidores.
          </p>
        </div>

        {/* Search FAQ */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Buscar pregunta o tema de interés (ej. envíos, efectos, distribuidor)..."
            value={faqQuery}
            onChange={(e) => setFaqQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1.25rem 0.85rem 2.75rem',
              borderRadius: '16px',
              border: '1px solid #CBD5E1',
              fontSize: '0.95rem',
              background: '#FFFFFF',
              boxShadow: 'var(--shadow-sm)',
              outline: 'none'
            }}
          />
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
        </div>

        {/* Accordions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: isOpen ? '2px solid #0B3B2C' : '1px solid #E2E8F0',
                  boxShadow: isOpen ? '0 10px 20px rgba(11,59,44,0.06)' : 'none',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#06241B' }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isOpen ? '#0B3B2C' : '#F1F5F9',
                    color: isOpen ? '#FFFFFF' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.25s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem 1.5rem',
                    color: '#475569',
                    fontSize: '0.95rem',
                    lineHeight: '1.65',
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '1rem'
                  }} className="animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Help Box */}
        <div style={{
          background: 'linear-gradient(135deg, #0B3B2C 0%, #165B46 100%)',
          borderRadius: '20px',
          padding: '2rem',
          color: '#FFFFFF',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
            ¿Tienes alguna otra duda o consulta personalizada?
          </h3>
          <p style={{ color: '#CBD5E1', fontSize: '0.92rem', maxWidth: '520px', margin: 0 }}>
            Nuestros asesores de bienestar están listos para orientarte de forma inmediata vía WhatsApp.
          </p>
          <a
            href="https://wa.me/5215500000000?text=Hola,%20tengo%20una%20duda%20sobre%20los%20productos%20Naturilia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-lg"
          >
            <PhoneCall size={18} /> Contactar a un Asesor en WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
