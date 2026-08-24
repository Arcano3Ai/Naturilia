import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles, Phone, Leaf, UserCheck } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onNavigate, activeSection, searchQuery, setSearchQuery }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'quiz', label: 'Test de Bienestar' },
    { id: 'distribuidores', label: '¿Ser Distribuidor?' },
    { id: 'faq', label: 'Preguntas' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div style={{
        background: 'linear-gradient(90deg, #06241B 0%, #0B3B2C 50%, #165B46 100%)',
        color: '#D4AF37',
        fontSize: '0.82rem',
        padding: '0.45rem 1rem',
        textAlign: 'center',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <span className="badge badge-gold" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>🇲🇽 México</span>
        <span>🚚 Envío <strong>GRATIS</strong> en compras mayores a $899 MXN | 🌿 Productos 100% Certificados</span>
        <a 
          href="https://wa.me/5215500000000?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20los%20suplementos%20Naturilia" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#FFFFFF', textDecoration: 'underline', marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
        >
          <Phone size={12} /> WhatsApp Directo
        </a>
      </div>

      {/* Main Navbar Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(250, 248, 245, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 10px 25px -5px rgba(11, 59, 44, 0.08)' : 'none',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => { e.preventDefault(); onNavigate('inicio'); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0B3B2C 0%, #165B46 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4AF37',
              boxShadow: '0 4px 12px rgba(11, 59, 44, 0.2)'
            }}>
              <Leaf size={24} />
            </div>
            <div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                color: '#0B3B2C',
                lineHeight: 1
              }}>
                NATURILIA
              </span>
              <span style={{
                display: 'block',
                fontSize: '0.65rem',
                fontWeight: '700',
                color: '#D4AF37',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                Salud & Bienestar
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-only">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: activeSection === link.id ? '700' : '500',
                  color: activeSection === link.id ? '#0B3B2C' : '#475569',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#D4AF37',
                    borderRadius: '2px'
                  }} />
                )}
              </a>
            ))}
          </nav>

          {/* Action Tools (Search & Cart & Distributor Badge) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            
            {/* Quick Search Input */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }} className="desktop-only">
              <input
                type="text"
                placeholder="Buscar suplemento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '0.55rem 0.9rem 0.55rem 2.2rem',
                  borderRadius: '999px',
                  border: '1px solid #CBD5E1',
                  background: '#FFFFFF',
                  fontSize: '0.85rem',
                  width: '180px',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.width = '240px'}
                onBlur={(e) => {
                  if (!searchQuery) e.target.style.width = '180px';
                }}
              />
              <Search size={15} style={{ position: 'absolute', left: '10px', color: '#94A3B8' }} />
            </div>

            {/* Become Distributor Fast Link */}
            <button 
              onClick={() => onNavigate('distribuidores')}
              className="btn btn-outline btn-sm desktop-only"
              style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', borderColor: '#D4AF37', color: '#8A6D1B', background: '#FFF9E6' }}
            >
              <UserCheck size={14} /> Distribuidores
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              id="cart-trigger-btn"
              className="btn btn-primary btn-sm"
              style={{ position: 'relative', padding: '0.55rem 1.1rem' }}
              aria-label="Ver Carrito de Compras"
            >
              <ShoppingBag size={18} />
              <span className="desktop-only">Carrito</span>
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  background: '#D4AF37',
                  color: '#06241B',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ padding: '0.5rem', color: '#0B3B2C', display: 'none' }}
              className="mobile-toggle"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type="text"
                placeholder="Buscar suplementos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem'
                }}
              />
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: activeSection === link.id ? '#0B3B2C' : '#334155',
                  padding: '0.4rem 0',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                {link.label}
              </a>
            ))}

            <button 
              onClick={() => { onNavigate('distribuidores'); setMobileMenuOpen(false); }}
              className="btn btn-gold"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <UserCheck size={16} /> Únete como Distribuidor
            </button>
          </div>
        )}
      </header>

      {/* Inline Responsive Helper CSS */}
      <style>{`
        @media (max-width: 960px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
