import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { scrollToElement } from '../utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Trang chủ', href: 'hero' },
    { label: 'Sản phẩm', href: 'products' },
    { label: 'Tính năng', href: 'features' },
    { label: 'Đánh giá', href: 'testimonials' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Liên hệ', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    scrollToElement(href);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-dark shadow-lg backdrop-blur-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-gold to-primary-orange rounded-lg flex items-center justify-center">
              <i className="fas fa-crown text-black text-lg"></i>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
                PremiumAccounts
              </h1>
              <p className="text-xs text-gray-400">Tài khoản số cao cấp</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-primary-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="relative glass-gold p-3 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <i className="fas fa-shopping-cart text-primary-gold"></i>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-orange text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden glass p-3 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-white`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="glass-dark rounded-lg mt-4 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary-gold hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
