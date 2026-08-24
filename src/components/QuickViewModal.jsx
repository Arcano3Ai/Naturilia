import React, { useState } from 'react';
import { X, Star, ShoppingCart, Check, ShieldCheck, Truck, Clock } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        background: 'rgba(6, 36, 27, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          padding: '2.25rem',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#F1F5F9',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748B',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#E2E8F0'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#F1F5F9'}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Product Image */}
          <div style={{
            background: 'radial-gradient(circle, #FAF8F5 0%, #EAE5DD 100%)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '320px',
            position: 'relative'
          }}>
            {product.badge && (
              <span className={`badge badge-${product.badgeType}`} style={{ position: 'absolute', top: '15px', left: '15px' }}>
                {product.badge}
              </span>
            )}
            
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                maxHeight: '260px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 15px 25px rgba(11,59,44,0.2))'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontSize: '4.5rem' }}>
              {product.fallbackIcon}
            </div>

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600' }}>
                Presentación: {product.presentation}
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Specs */}
          <div>
            <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {product.categoryLabel}
            </span>

            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#06241B', marginTop: '0.2rem', marginBottom: '0.5rem' }}>
              {product.name}
            </h2>

            {/* Rating Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '2px', color: '#D4AF37' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0F172A' }}>{product.rating}</span>
              <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>({product.reviewsCount} opiniones de clientes)</span>
            </div>

            {/* Price Box */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem', padding: '0.75rem 1rem', background: '#FAF8F5', borderRadius: '12px' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: '#0B3B2C' }}>
                ${product.price} <small style={{ fontSize: '0.9rem' }}>MXN</small>
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1.1rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                  ${product.originalPrice} MXN
                </span>
              )}
              <span style={{ fontSize: '0.8rem', color: '#15803D', fontWeight: '700', marginLeft: 'auto' }}>
                Ahorras ${product.originalPrice - product.price} MXN
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              {product.description}
            </p>

            {/* Key Benefits List */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0B3B2C', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Beneficios Principales:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {product.benefits.map((benefit, i) => (
                  <li key={i} style={{ fontSize: '0.88rem', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Check size={16} color="#0B3B2C" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mode of Use */}
            <div style={{ marginBottom: '1.5rem', padding: '0.75rem', borderRadius: '8px', background: '#F1F5F9', fontSize: '0.85rem', color: '#475569' }}>
              <strong style={{ color: '#0F172A' }}>Modo de Uso: </strong> {product.usage}
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #CBD5E1', borderRadius: '999px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ padding: '0.6rem 1rem', fontSize: '1.1rem', fontWeight: '700', color: '#334155' }}
                >
                  -
                </button>
                <span style={{ padding: '0 0.8rem', fontWeight: '800', fontSize: '1rem', color: '#0B3B2C' }}>
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ padding: '0.6rem 1rem', fontSize: '1.1rem', fontWeight: '700', color: '#334155' }}
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="btn btn-gold"
                style={{ flex: 1, padding: '0.9rem 1.5rem' }}
              >
                {addedToast ? (
                  <>
                    <Check size={20} /> ¡Agregado al Carrito!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} /> Agregar ${product.price * quantity} MXN
                  </>
                )}
              </button>
            </div>

            {/* Guarantees micro-copy */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', fontSize: '0.78rem', color: '#64748B' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Truck size={14} /> Envío Rápido 2-4 Días</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ShieldCheck size={14} /> Pago 100% Seguro</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
