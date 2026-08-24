import React from 'react';
import { Star, ShieldCheck, Quote, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Carmen Salinas M.",
      location: "Guadalajara, Jal.",
      role: "Cliente Naturilia (Detox Slim)",
      rating: 5,
      comment: "Llevo 3 semanas tomando Naturilia Detox Slim y los resultados en inflamación son increíbles. He bajado 3.5 kg de forma constante sin temblores ni dolores de cabeza como con otras marcas.",
      verified: true
    },
    {
      name: "Ing. Roberto Treviño",
      location: "Monterrey, N.L.",
      role: "Distribuidor Plata (6 meses)",
      rating: 5,
      comment: "Comencé distribuyendo Naturilia con el kit inicial y en menos de 2 meses dupliqué mis ventas entre mis conocidos y gimnasios locales. Las capacitaciones y atención son excelentes.",
      verified: true
    },
    {
      name: "Dra. Patricia Mendoza",
      location: "Puebla, Pue.",
      role: "Cliente (Bio-Collagen)",
      rating: 5,
      comment: "El colágeno hidrolizado de Naturilia sabe delicioso y disuelve perfecto. Mis uñas dejaron de quebrarse y la piel de mi rostro se siente mucho más hidratada y suave.",
      verified: true
    }
  ];

  return (
    <section style={{ padding: '5rem 0', background: '#FAF8F5' }}>
      <div className="container">
        <div className="section-header">
          <span className="subtitle">
            <Quote size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Experiencias Reales
          </span>
          <h2 className="title">Lo que Opinan Nuestros Clientes & Distribuidores</h2>
          <p className="description">
            Historias de éxito de personas que han transformado su salud y su economía familiar con Naturilia.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '2px', color: '#D4AF37' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                      <ShieldCheck size={12} /> Compra Verificada
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#165B46',
                  color: '#D4AF37',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#06241B', margin: 0 }}>
                    {rev.name}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                    {rev.role} • {rev.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
