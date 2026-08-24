import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WellnessQuiz from './components/WellnessQuiz';
import ProductCatalog from './components/ProductCatalog';
import DistributorHub from './components/DistributorHub';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { PhoneCall } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Persisted cart in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('naturilia_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('naturilia_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Cart save error", e);
    }
  }, [cart]);

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Global Navbar */}
      <Navbar
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero 
          onNavigate={handleNavigate} 
          onOpenQuiz={() => handleNavigate('quiz')} 
        />
        
        <WellnessQuiz 
          onAddToCart={handleAddToCart}
          onNavigate={handleNavigate}
        />

        <ProductCatalog 
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <DistributorHub />

        <Testimonials />

        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/5215500000000?text=Hola%20Naturilia,%20quisiera%20recibir%20asesor%C3%ADa%20personalizada%20sobre%20sus%20suplementos"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99,
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#FFFFFF',
          padding: '0.85rem 1.35rem',
          borderRadius: '999px',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontWeight: '700',
          fontSize: '0.9rem',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06) translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
        aria-label="Contactar por WhatsApp"
      >
        <PhoneCall size={20} />
        <span className="desktop-only">Asesoría WhatsApp</span>
      </a>

    </div>
  );
}
