import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Star, Award, Zap, HeartPulse } from 'lucide-react';

export default function Hero({ onNavigate, onOpenQuiz }) {
  return (
    <section 
      id="inicio"
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(250, 248, 245, 0) 50%), linear-gradient(180deg, #FAF8F5 0%, #F3EFEA 100%)'
      }}
    >
      {/* Decorative Natural Glow Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(11, 59, 44, 0.08) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Value Proposition & CTAs */}
          <div>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={13} /> Suplementación Natural Premium en México
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.6rem)',
              lineHeight: 1.12,
              fontWeight: 800,
              color: '#06241B',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              Nutrición Botánica para tu <span style={{
                background: 'linear-gradient(135deg, #0B3B2C 0%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Salud, Belleza & Bienestar</span>
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '560px'
            }}>
              Descubre suplementos orgánicos de alta absorción diseñados para acelerar tu metabolismo de forma segura, regenerar tu piel y potenciar tu vitalidad diaria.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => onNavigate('catalogo')}
                className="btn btn-primary btn-lg"
                id="hero-cta-catalogo"
              >
                Explorar Catálogo <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={onOpenQuiz}
                className="btn btn-gold btn-lg animate-pulse-glow"
                id="hero-cta-quiz"
              >
                <Zap size={18} opacity={0.9} /> Test: Encuentra tu Suplemento
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(203, 213, 225, 0.6)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: '#D8F3DC',
                  color: '#0B3B2C'
                }}>
                  <Truck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', margin: 0 }}>Envíos Nacionales</h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>A todo México</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: '#FFF9E6',
                  color: '#8A6D1B'
                }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', margin: 0 }}>100% Natural</h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Certificado</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: '#E0F2FE',
                  color: '#0369A1'
                }}>
                  <Award size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', margin: 0 }}>Distribuidores</h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Red Nacional</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Product Showcase */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Background Glow Ring */}
            <div style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(11, 59, 44, 0.15) 0%, rgba(212, 175, 55, 0.25) 100%)',
              filter: 'blur(30px)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }} />

            {/* Featured Product Presentation Card */}
            <div className="glass-card animate-float" style={{
              position: 'relative',
              zIndex: 2,
              padding: '1.75rem',
              width: '100%',
              maxWidth: '420px',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,248,245,0.9) 100%)'
            }}>
              
              {/* Top Floating Badge */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                right: '20px',
                background: 'linear-gradient(135deg, #0B3B2C 0%, #165B46 100%)',
                color: '#D4AF37',
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(11,59,44,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Star size={14} fill="#D4AF37" color="#D4AF37" /> #1 Más Vendido en México
              </div>

              {/* Product Image */}
              <div style={{
                width: '100%',
                height: '260px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'radial-gradient(circle, #F8F6F0 0%, #EAE5DD 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <img 
                  src="/images/detox_slim.png" 
                  alt="Naturilia Detox Slim Suplemento Natural" 
                  style={{
                    maxHeight: '240px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 20px rgba(11,59,44,0.25))'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#0B3B2C' }}>
                  <HeartPulse size={64} />
                  <span style={{ fontWeight: '700' }}>Naturilia Detox Slim</span>
                </div>
              </div>

              {/* Product Title & Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#06241B', margin: 0 }}>
                    Naturilia Detox Slim
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: '600' }}>
                    Té Verde + Espirulina + L-Carnitina
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0B3B2C' }}>$490 <small style={{ fontSize: '0.7rem' }}>MXN</small></span>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: '#94A3B8', textDecoration: 'line-through' }}>$590 MXN</span>
                </div>
              </div>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#D4AF37', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <span style={{ color: '#334155', fontWeight: '700' }}>4.9/5</span>
                <span style={{ color: '#94A3B8' }}>(142 reseñas verificadas)</span>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onNavigate('catalogo')}
                className="btn btn-primary"
                style={{ width: '100%', borderRadius: '12px' }}
              >
                Ver Detalles & Comprar
              </button>

            </div>

            {/* Additional Floating Social Proof Pill */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '0',
              zIndex: 3,
              background: '#FFFFFF',
              padding: '0.75rem 1.25rem',
              borderRadius: '999px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              border: '1px solid #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }} className="desktop-only">
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#D8F3DC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0B3B2C',
                fontWeight: '800',
                fontSize: '0.85rem'
              }}>
                15K+
              </div>
              <div style={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
                <strong style={{ display: 'block', color: '#0F172A' }}>Clientes satisfechos</strong>
                <span style={{ color: '#64748B' }}>En todo el territorio nacional</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
