import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RefreshCw, ShoppingCart, ArrowRight, Award, Zap } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function WellnessQuiz({ onAddToCart, onNavigate }) {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);
  const [recommendedProduct, setRecommendedProduct] = useState(null);

  const goals = [
    {
      id: 'weight',
      title: 'Control de Peso & Reducción de Talla',
      desc: 'Quiero acelerar mi metabolismo, quemar grasa corporal y controlar ansiedades.',
      icon: '🔥',
      recommendId: 'detox-slim'
    },
    {
      id: 'beauty',
      title: 'Piel Radiante, Cabello & Uñas',
      desc: 'Deseo disimular líneas de expresión, mejorar firmeza cutánea y fortalecer cabello.',
      icon: '✨',
      recommendId: 'bio-collagen'
    },
    {
      id: 'digestive',
      title: 'Desinflamación Abdominal & Digestión',
      desc: 'Busco eliminar la pesantez, desintoxicar mi intestino y mejorar tránsito.',
      icon: '🍃',
      recommendId: 'green-cleanse'
    },
    {
      id: 'sleep',
      title: 'Descanso Profundo & Anti-Estrés',
      desc: 'Necesito conciliar el sueño rápidamente, aliviar tensión muscular y ansiedad.',
      icon: '🌙',
      recommendId: 'night-rest'
    }
  ];

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    setStep(2);
  };

  const handleSelectActivity = (level) => {
    setActivityLevel(level);
    // Determine recommendation
    const matched = PRODUCTS.find(p => p.id === selectedGoal.recommendId) || PRODUCTS[0];
    setRecommendedProduct(matched);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedGoal(null);
    setActivityLevel(null);
    setRecommendedProduct(null);
  };

  return (
    <section 
      id="quiz"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(180deg, #F3EFEA 0%, #FAF8F5 100%)',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">
            <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Recomendador Personalizado
          </span>
          <h2 className="title">Descubre tu Suplemento Ideal</h2>
          <p className="description">
            Responde 2 preguntas rápidas y nuestro algoritmo identificará la fórmula Naturilia perfecta para tus metas de salud.
          </p>
        </div>

        {/* Quiz Box Card */}
        <div className="glass-card" style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '2.5rem',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 20px 40px -15px rgba(11, 59, 44, 0.1)',
          borderRadius: '24px'
        }}>
          
          {/* Progress Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0B3B2C', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Paso {step} de 3
            </span>
            <div style={{ display: 'flex', gap: '8px', width: '200px' }}>
              <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: step >= 1 ? '#0B3B2C' : '#E2E8F0' }} />
              <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: step >= 2 ? '#0B3B2C' : '#E2E8F0' }} />
              <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: step >= 3 ? '#D4AF37' : '#E2E8F0' }} />
            </div>
          </div>

          {/* STEP 1: Select Main Goal */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center', color: '#06241B' }}>
                ¿Cuál es tu objetivo prioritario de bienestar hoy?
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}>
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => handleSelectGoal(g)}
                    style={{
                      textAlign: 'left',
                      padding: '1.5rem',
                      borderRadius: '16px',
                      border: '2px solid #E2E8F0',
                      background: '#FFFFFF',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#0B3B2C';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(11, 59, 44, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '2.2rem' }}>{g.icon}</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0B3B2C', marginBottom: '0.3rem' }}>
                        {g.title}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: '1.4' }}>
                        {g.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Activity Level */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem', textAlign: 'center', color: '#06241B' }}>
                ¿Cuál es tu nivel de actividad o rutina habitual?
              </h3>
              <p style={{ textAlign: 'center', color: '#64748B', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Meta seleccionada: <strong>{selectedGoal?.title}</strong>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '520px', margin: '0 auto' }}>
                {[
                  { id: 'low', title: 'Rutina sedentaria / Poco tiempo para entrenar', icon: '🚶‍♂️' },
                  { id: 'medium', title: 'Activo / Ejercicio 2 a 3 veces por semana', icon: '🏃‍♀️' },
                  { id: 'high', title: 'Alto rendimiento / Ejercicio constante 4+ días', icon: '⚡' }
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => handleSelectActivity(act.id)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '16px',
                      border: '2px solid #E2E8F0',
                      background: '#FFFFFF',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#D4AF37';
                      e.currentTarget.style.background = '#FFF9E6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                  >
                    <span style={{ fontSize: '1.6rem' }}>{act.icon}</span>
                    <span>{act.title}</span>
                  </button>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  onClick={() => setStep(1)} 
                  style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'underline' }}
                >
                  ← Volver al paso anterior
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Results & Personalized Recommendation */}
          {step === 3 && recommendedProduct && (
            <div className="animate-fade-in" style={{ textAlign: 'center' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                <Award size={16} /> ¡Tu Fórmula Ideal Seleccionada!
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#06241B', marginBottom: '0.5rem' }}>
                Recomendación: {recommendedProduct.name}
              </h3>

              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                Basado en tu objetivo de <strong>{selectedGoal?.title}</strong>, esta fórmula contiene los principios activos botánicos de mayor biodisponibilidad para tus requerimientos.
              </p>

              {/* Product Result Card */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                border: '2px solid #0B3B2C',
                boxShadow: '0 12px 30px rgba(11, 59, 44, 0.12)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
                textAlign: 'left',
                marginBottom: '2rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '180px',
                    height: '180px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    background: '#FAF8F5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem'
                  }}>
                    {recommendedProduct.fallbackIcon}
                  </div>
                  <span className="badge badge-emerald" style={{ marginTop: '1rem' }}>
                    {recommendedProduct.presentation}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0B3B2C', marginBottom: '0.5rem' }}>
                    {recommendedProduct.name}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1rem' }}>
                    {recommendedProduct.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {recommendedProduct.benefits.slice(0, 3).map((b, idx) => (
                      <li key={idx} style={{ fontSize: '0.88rem', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={16} color="#0B3B2C" /> {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0B3B2C' }}>
                        ${recommendedProduct.price} MXN
                      </span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: '#10B981', fontWeight: '700' }}>
                        ¡Envío gratis aplicable!
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(recommendedProduct)}
                      className="btn btn-gold"
                      style={{ flex: 1, padding: '0.85rem 1.25rem' }}
                    >
                      <ShoppingCart size={18} /> Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <button
                  onClick={handleReset}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#64748B',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  <RefreshCw size={15} /> Volver a realizar el test
                </button>

                <button
                  onClick={() => onNavigate('catalogo')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#0B3B2C',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    textDecoration: 'underline'
                  }}
                >
                  Ver todo el catálogo <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
