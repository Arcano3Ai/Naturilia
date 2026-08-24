import React, { useState } from 'react';
import { UserCheck, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, Send, PhoneCall, Award, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DISTRIBUTOR_TIERS } from '../data/products';

export default function DistributorHub() {
  const [salesVolume, setSalesVolume] = useState(20); // number of kits per month
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'CDMX',
    tierPreference: 'Plata'
  });
  const [submitted, setSubmitted] = useState(false);

  // Profit Calculation
  const avgKitPrice = 1100; // avg revenue generated per kit combo
  const discountPercent = salesVolume < 15 ? 0.30 : salesVolume < 40 ? 0.40 : 0.50;
  const grossSales = salesVolume * avgKitPrice;
  const netCost = grossSales * (1 - discountPercent);
  const netProfit = grossSales - netCost;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger festive confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const statesOfMexico = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
    "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit",
    "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
    "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
  ];

  return (
    <section 
      id="distribuidores"
      style={{
        padding: '5.5rem 0',
        background: 'linear-gradient(180deg, #06241B 0%, #0B3B2C 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Accent Lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div className="section-header" style={{ color: '#FFFFFF' }}>
          <span className="subtitle" style={{ color: '#D4AF37' }}>
            <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Oportunidad de Negocio Independiente
          </span>
          <h2 className="title" style={{ color: '#FFFFFF' }}>
            Únete a la Red de Distribuidores Naturilia
          </h2>
          <p className="description" style={{ color: '#94A3B8' }}>
            Emprende en la industria de mayor crecimiento en México: Salud y Bienestar. Obtén hasta un <strong style={{ color: '#D4AF37' }}>100% de margen de ganancia</strong> sobre tu inversión.
          </p>
        </div>

        {/* Interactive ROI & Profit Calculator */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '24px',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
              <TrendingUp size={14} /> Simulador Interactivo de Ganancias
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: '800' }}>
              Calcula tus Ganancias Mensuales Estimadas
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>
              Desliza la barra para seleccionar la cantidad aproximada de kits de suplementos que distribuirás al mes:
            </p>
          </div>

          {/* Slider Input */}
          <div style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: '700', fontSize: '1.1rem', color: '#D4AF37' }}>
              <span>10 Kits / mes</span>
              <span style={{ fontSize: '1.4rem', color: '#FFFFFF', background: '#165B46', padding: '0.2rem 1rem', borderRadius: '999px' }}>
                {salesVolume} Kits de Suplementos
              </span>
              <span>100+ Kits / mes</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={salesVolume}
              onChange={(e) => setSalesVolume(Number(e.target.value))}
              style={{
                width: '100%',
                height: '10px',
                borderRadius: '5px',
                background: 'linear-gradient(90deg, #165B46 0%, #D4AF37 100%)',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Dynamic ROI Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Descuento Directo</span>
              <h4 style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', marginTop: '0.4rem' }}>
                {discountPercent * 100}% DE DTO.
              </h4>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inversión Requerida</span>
              <h4 style={{ fontSize: '2rem', fontWeight: '800', color: '#CBD5E1', marginTop: '0.4rem' }}>
                ${netCost.toLocaleString('es-MX')} <small style={{ fontSize: '0.8rem' }}>MXN</small>
              </h4>
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(22,91,70,0.3) 100%)', padding: '1.5rem', borderRadius: '16px', border: '2px solid #D4AF37' }}>
              <span style={{ fontSize: '0.85rem', color: '#D4AF37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ganancia Neta Mensual</span>
              <h4 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFFFFF', marginTop: '0.4rem' }}>
                ${netProfit.toLocaleString('es-MX')} <small style={{ fontSize: '0.9rem' }}>MXN</small>
              </h4>
            </div>
          </div>

        </div>

        {/* Distributor Tiers Comparison Grid */}
        <h3 style={{ fontSize: '1.75rem', fontWeight: '800', textAlign: 'center', marginBottom: '2rem', color: '#FFFFFF' }}>
          Niveles de Membresía & Descuento
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          {DISTRIBUTOR_TIERS.map((tier, idx) => (
            <div 
              key={idx}
              style={{
                background: tier.popular ? 'linear-gradient(180deg, #0D261E 0%, #165B46 100%)' : 'rgba(255, 255, 255, 0.04)',
                borderRadius: '20px',
                padding: '2rem',
                border: tier.popular ? '2px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: tier.popular ? '0 15px 35px rgba(212, 175, 55, 0.2)' : 'none'
              }}
            >
              {tier.popular && (
                <span style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#D4AF37',
                  color: '#06241B',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  padding: '0.35rem 1rem',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  ★ Opción Más Popular
                </span>
              )}

              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                  Nivel {tier.badge}
                </span>

                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.3rem' }}>
                  {tier.level}
                </h4>

                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#D4AF37', marginBottom: '0.2rem' }}>
                  {tier.discount}
                </div>

                <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                  Pedido Mínimo: <strong style={{ color: '#FFFFFF' }}>{tier.minOrder}</strong>
                </p>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {tier.features.map((feat, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', color: '#E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="#D4AF37" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#registro-distribuidor" 
                className={tier.popular ? 'btn btn-gold' : 'btn btn-outline'}
                style={{ width: '100%', textAlign: 'center', borderColor: tier.popular ? 'none' : '#D4AF37', color: tier.popular ? '#06241B' : '#D4AF37' }}
              >
                Solicitar Nivel {tier.badge}
              </a>

            </div>
          ))}
        </div>

        {/* Lead Registration Form */}
        <div id="registro-distribuidor" style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          color: '#0F172A',
          padding: '3rem 2.5rem',
          maxWidth: '780px',
          margin: '0 auto',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }} className="animate-fade-in">
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: '#D8F3DC',
                color: '#0B3B2C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <Award size={36} />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0B3B2C', marginBottom: '0.5rem' }}>
                ¡Solicitud Recibida con Éxito, {formData.fullName}!
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem auto' }}>
                Un Asesor Senior de Ventas Naturilia se comunicará contigo vía WhatsApp a tu número (<strong>{formData.phone}</strong>) para enviarte la lista de precios mayoristas y kit inicial.
              </p>
              
              <a 
                href={`https://wa.me/5215500000000?text=Hola,%20acabo%20de%20enviar%20mi%20registro%20de%20distribuidor%20Naturilia.%20Mi%20nombre%20es%20${encodeURIComponent(formData.fullName)}%20desde%20${encodeURIComponent(formData.state)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg"
              >
                <PhoneCall size={20} /> Hablar Directo por WhatsApp Ahora
              </a>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                  <UserCheck size={14} /> Formulario Directo de Registro
                </span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0B3B2C' }}>
                  Solicita Información de Distribución
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem' }}>
                  Completa tus datos y recibe en minutos el catálogo mayorista con precios de distribución.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '0.4rem' }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María Elena Garza"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '0.4rem' }}>
                    Teléfono WhatsApp (10 dígitos) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 5512345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '0.4rem' }}>
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '0.4rem' }}>
                    Estado en México *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#FFFFFF'
                    }}
                  >
                    {statesOfMexico.map((st, i) => (
                      <option key={i} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', borderRadius: '12px' }}
                  >
                    <Send size={18} /> Enviar Registro & Obtener Catálogo Mayorista
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
