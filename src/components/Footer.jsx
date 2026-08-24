import React, { useState } from 'react';
import { Leaf, Phone, Mail, MapPin, ShieldCheck, X } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer style={{
      background: '#06241B',
      color: '#94A3B8',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3.5rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Column 1: Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#165B46',
                color: '#D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Leaf size={22} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                NATURILIA
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#CBD5E1', marginBottom: '1.25rem' }}>
              Empresa mexicana dedicada a la formulación y comercialización de suplementos naturales de la más alta pureza para tu cuidado personal, salud y estética integral.
            </p>

            <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
              <ShieldCheck size={13} /> Procesos Certificados
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Navegación Rápida
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#inicio" onClick={() => onNavigate('inicio')} style={{ color: '#CBD5E1' }}>Inicio</a></li>
              <li><a href="#catalogo" onClick={() => onNavigate('catalogo')} style={{ color: '#CBD5E1' }}>Catálogo de Productos</a></li>
              <li><a href="#quiz" onClick={() => onNavigate('quiz')} style={{ color: '#CBD5E1' }}>Test de Bienestarl Ideal</a></li>
              <li><a href="#distribuidores" onClick={() => onNavigate('distribuidores')} style={{ color: '#CBD5E1' }}>Red de Distribuidores</a></li>
              <li><a href="#faq" onClick={() => onNavigate('faq')} style={{ color: '#CBD5E1' }}>Preguntas Frecuentes</a></li>
              <li><button onClick={() => setPrivacyModalOpen(true)} style={{ color: '#D4AF37', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '0.9rem' }}>Aviso de Privacidad</button></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Contacto & Sucursales
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Oficinas Centrales Naturilia, Ciudad de México, México.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="#D4AF37" />
                <span>Atención a Clientes & Pedidos</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="#D4AF37" />
                <span>contacto@naturilia.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Club Naturilia
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '1rem' }}>
              Recibe promociones exclusivas, guías nutricionales y descuentos especiales de lanzamiento.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  padding: '0.65rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid #165B46',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
                {subscribed ? '¡Suscrito con Éxito!' : 'Suscribirme'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
          fontSize: '0.82rem',
          color: '#64748B'
        }}>
          <p>© {new Date().getFullYear()} Naturilia. Todos los derechos reservados. Suplementos para la Salud, Belleza & Bienestar en México.</p>
        </div>

      </div>

      {/* Privacy Notice Modal */}
      {privacyModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }} onClick={() => setPrivacyModalOpen(false)}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '2rem',
            color: '#0F172A',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPrivacyModalOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '32px', height: '32px' }}
            >
              <X size={18} />
            </button>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0B3B2C', marginBottom: '1rem' }}>
              Aviso de Privacidad Integral - Naturilia
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#475569', marginBottom: '1rem' }}>
              Naturilia México, con domicilio en la República Mexicana, es responsable del tratamiento de sus datos personales. Sus datos serán utilizados para: procesar sus pedidos de suplementos naturales, brindarle asesoría personalizada, enviar información comercial si así lo solicita, y gestionar su registro en la red de distribuidores independientes.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#475569', marginBottom: '1.5rem' }}>
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Derechos ARCO). Para ejercer cualquier derecho de acceso, rectificación, cancelación u oposición, puede comunicarse a contacto@naturilia.com.
            </p>
            <button onClick={() => setPrivacyModalOpen(false)} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
