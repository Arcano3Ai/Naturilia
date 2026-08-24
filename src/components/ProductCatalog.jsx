import React, { useState } from 'react';
import { Star, Eye, ShoppingCart, Filter, Sparkles, Check, Search } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import QuickViewModal from './QuickViewModal';

export default function ProductCatalog({ onAddToCart, searchQuery, setSearchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [addedToastId, setAddedToastId] = useState(null);

  // Filter & Sort Logic
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // popular
  });

  const handleQuickAdd = (product) => {
    onAddToCart(product);
    setAddedToastId(product.id);
    setTimeout(() => {
      setAddedToastId(null);
    }, 1200);
  };

  return (
    <section 
      id="catalogo"
      style={{
        padding: '5rem 0',
        background: '#FAF8F5',
        minHeight: '800px'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">
            <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Catálogo Oficial Naturilia
          </span>
          <h2 className="title">Suplementos de Grado Farmacéutico & Natural</h2>
          <p className="description">
            Fórmulas desarrolladas con ingredientes botánicos puros de la más alta calidad y trazabilidad.
          </p>
        </div>

        {/* Category Tabs & Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Categories Horizontal Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: selectedCategory === cat.id ? '700' : '600',
                  color: selectedCategory === cat.id ? '#FFFFFF' : '#475569',
                  background: selectedCategory === cat.id 
                    ? 'linear-gradient(135deg, #0B3B2C 0%, #165B46 100%)' 
                    : '#FFFFFF',
                  border: selectedCategory === cat.id 
                    ? 'none' 
                    : '1px solid #CBD5E1',
                  boxShadow: selectedCategory === cat.id 
                    ? '0 4px 14px rgba(11,59,44,0.2)' 
                    : 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Indicator & Sort Dropdown */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1rem 1.5rem',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: 'var(--shadow-sm)'
          }}>
            
            <div style={{ fontSize: '0.9rem', color: '#64748B' }}>
              Mostrando <strong style={{ color: '#0B3B2C' }}>{filteredProducts.length}</strong> suplementos
              {searchQuery && (
                <span style={{ marginLeft: '0.5rem' }}>
                  para "<strong style={{ color: '#0F172A' }}>{searchQuery}</strong>"
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ marginLeft: '0.5rem', color: '#EF4444', textDecoration: 'underline', fontSize: '0.8rem' }}
                  >
                    Limpiar filtro
                  </button>
                </span>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Filter size={14} /> Ordenar por:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: '#FAF8F5',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#0F172A',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="popular">Más Populares & Vendidos</option>
                <option value="rating">Mejor Calificados (5★)</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
              </select>
            </div>

          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#FFFFFF', borderRadius: '24px', border: '1px dashed #CBD5E1' }}>
            <Search size={48} color="#94A3B8" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0B3B2C', marginBottom: '0.5rem' }}>
              No encontramos suplementos con ese término
            </h3>
            <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>
              Intenta buscar por categorías como "Detox", "Colágeno", "Peso" o limpia el buscador.
            </p>
            <button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }} className="btn btn-outline">
              Ver Todos los Productos
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#FFFFFF',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Badge Overlay */}
                {product.badge && (
                  <span 
                    className={`badge badge-${product.badgeType}`}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      zIndex: 3,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Product Image Frame */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  background: 'radial-gradient(circle, #FAF8F5 0%, #F1ECE4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '1.5rem'
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      maxHeight: '200px',
                      objectFit: 'contain',
                      transition: 'transform 0.4s ease',
                      filter: 'drop-shadow(0 10px 15px rgba(11,59,44,0.15))'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontSize: '4rem' }}>
                    {product.fallbackIcon}
                  </div>

                  {/* Quick View Floating Button */}
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#0B3B2C',
                      border: '1px solid #CBD5E1',
                      borderRadius: '999px',
                      padding: '0.4rem 0.85rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0B3B2C';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.color = '#0B3B2C';
                    }}
                  >
                    <Eye size={14} /> Vista Rápida
                  </button>
                </div>

                {/* Card Info Content */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#D4AF37',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      display: 'block',
                      marginBottom: '0.2rem'
                    }}>
                      {product.categoryLabel}
                    </span>

                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '800',
                      color: '#06241B',
                      marginBottom: '0.4rem',
                      lineHeight: '1.3'
                    }}>
                      {product.name}
                    </h3>

                    <p style={{
                      fontSize: '0.85rem',
                      color: '#64748B',
                      lineHeight: '1.4',
                      marginBottom: '1rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {product.tagline}
                    </p>

                    {/* Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', gap: '2px', color: '#D4AF37' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                        ))}
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0F172A' }}>{product.rating}</span>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Price & Action Button Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid #F1F5F9'
                  }}>
                    <div>
                      <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0B3B2C' }}>
                        ${product.price} <small style={{ fontSize: '0.7rem' }}>MXN</small>
                      </span>
                      {product.originalPrice && (
                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                          ${product.originalPrice} MXN
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="btn btn-gold btn-sm"
                      style={{ padding: '0.6rem 1.1rem' }}
                    >
                      {addedToastId === product.id ? (
                        <>
                          <Check size={16} /> ¡Añadido!
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={16} /> Comprar
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
}
