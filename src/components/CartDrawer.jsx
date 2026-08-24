import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, ShieldCheck, CheckCircle2, PhoneCall, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'whatsapp'
  });
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_LIMIT = 899;
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_LIMIT || cart.length === 0;
  const shippingCost = isFreeShipping ? 0 : 120;
  const total = subtotal + shippingCost;
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_LIMIT) * 100);

  // Generate WhatsApp Order Message
  const buildWhatsAppMessage = () => {
    let text = `🛒 *NUEVO PEDIDO NATURILIA*\n\n`;
    cart.forEach(item => {
      text += `• ${item.quantity}x ${item.name} ($${item.price * item.quantity} MXN)\n`;
    });
    text += `\n*Subtotal:* $${subtotal} MXN\n`;
    text += `*Envío:* ${isFreeShipping ? 'GRATIS 🇲🇽' : `$${shippingCost} MXN`}\n`;
    text += `*TOTAL A PAGAR:* $${total} MXN\n\n`;
    if (customerInfo.name) {
      text += `*Cliente:* ${customerInfo.name}\n`;
      text += `*Teléfono:* ${customerInfo.phone}\n`;
      text += `*Dirección:* ${customerInfo.address}, ${customerInfo.city}\n`;
    }
    return encodeURIComponent(text);
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    confetti({ particleCount: 120, spread: 80 });
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      background: 'rgba(6, 36, 27, 0.6)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }} onClick={onClose}>
      
      {/* Drawer Container */}
      <div 
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          background: '#FFFFFF',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '1.75rem'
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        
        {/* Drawer Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ padding: '0.4rem', borderRadius: '10px', background: '#D8F3DC', color: '#0B3B2C' }}>
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#06241B', margin: 0 }}>
                Tu Carrito de Compras
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                {cart.length} {cart.length === 1 ? 'producto' : 'productos'} seleccionados
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F1F5F9', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div style={{ margin: '1rem 0', padding: '0.85rem 1rem', background: '#FAF8F5', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
            <span style={{ fontWeight: '700', color: isFreeShipping ? '#15803D' : '#06241B', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Truck size={14} /> {isFreeShipping ? '¡Felicidades! Tienes Envío GRATIS 🇲🇽' : `Te faltan $${FREE_SHIPPING_LIMIT - subtotal} MXN para Envío GRATIS`}
            </span>
          </div>
          <div style={{ width: '100%', height: '7px', borderRadius: '4px', background: '#E2E8F0', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #165B46 0%, #D4AF37 100%)', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#64748B' }}>
              <ShoppingBag size={54} color="#CBD5E1" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0B3B2C', marginBottom: '0.4rem' }}>
                Tu carrito está vacío
              </h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Explora nuestra línea de suplementos naturales y añade bienestar a tu día.
              </p>
              <button onClick={onClose} className="btn btn-primary btn-sm">
                Explorar Productos
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '16px',
                  border: '1px solid #F1F5F9',
                  background: '#FFFFFF',
                  boxShadow: 'var(--shadow-sm)',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  background: '#FAF8F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  flexShrink: 0
                }}>
                  {item.fallbackIcon}
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#06241B', margin: 0 }}>
                    {item.name}
                  </h4>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0B3B2C' }}>
                    ${item.price} MXN
                  </span>

                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #CBD5E1', borderRadius: '999px', overflow: 'hidden' }}>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{ padding: '0.2rem 0.6rem', fontSize: '0.85rem', color: '#334155', fontWeight: '700' }}
                      >
                        -
                      </button>
                      <span style={{ padding: '0 0.4rem', fontSize: '0.82rem', fontWeight: '800', color: '#0F172A' }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ padding: '0.2rem 0.6rem', fontSize: '0.85rem', color: '#334155', fontWeight: '700' }}
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      style={{ color: '#EF4444', border: 'none', background: 'none', cursor: 'pointer', padding: '0.2rem' }}
                      title="Eliminar producto"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                <div style={{ textAlign: 'right', fontWeight: '800', fontSize: '1rem', color: '#0B3B2C' }}>
                  ${item.price * item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #E2E8F0', marginTop: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
                <span>Subtotal:</span>
                <span>${subtotal} MXN</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
                <span>Envío estimado:</span>
                <span>{isFreeShipping ? <strong style={{ color: '#15803D' }}>GRATIS</strong> : `$${shippingCost} MXN`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '800', color: '#0B3B2C', paddingTop: '0.4rem', borderTop: '1px dashed #E2E8F0' }}>
                <span>Total:</span>
                <span>${total} MXN</span>
              </div>
            </div>

            {/* Quick Action Checkout Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/5215500000000?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%', borderRadius: '12px', justifyContent: 'center' }}
              >
                <PhoneCall size={18} /> Pedir Directo por WhatsApp
              </a>

              <button
                onClick={() => setIsCheckoutModalOpen(true)}
                className="btn btn-primary"
                style={{ width: '100%', borderRadius: '12px', justifyContent: 'center' }}
              >
                <CreditCard size={18} /> Finalizar Compra en Línea
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Online / OXXO Checkout Modal Simulation */}
      {isCheckoutModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setIsCheckoutModalOpen(false)}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '2rem',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsCheckoutModalOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '32px', height: '32px' }}
            >
              <X size={18} />
            </button>

            {orderComplete ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle2 size={54} color="#15803D" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0B3B2C' }}>
                  ¡Pedido Confirmado con Éxito!
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Número de rastreo preliminar: <strong>NAT-{Math.floor(100000 + Math.random() * 900000)}</strong>
                </p>
                <p style={{ fontSize: '0.85rem', color: '#334155' }}>
                  Recibirás los detalles de confirmación y guía de paquetería en tu correo y número telefónico. ¡Gracias por confiar en Naturilia!
                </p>
              </div>
            ) : (
              <form onSubmit={handleCompleteOrder}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#06241B', marginBottom: '1rem' }}>
                  Datos de Envío & Pago Seguro
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Nombre Completo"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Teléfono de Contacto"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Calle, Número y Colonia"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Ciudad y Estado"
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                    style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>

                <div style={{ padding: '1rem', background: '#FAF8F5', borderRadius: '12px', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', fontWeight: '800', color: '#0B3B2C' }}>
                  <span>Total a Pagar:</span>
                  <span>${total} MXN</span>
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  <ShieldCheck size={18} /> Pagar ${total} MXN con Seguridad 256-bit
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
