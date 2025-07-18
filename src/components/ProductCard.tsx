import React, { useState } from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatCurrency, calculateDiscount } from '../utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(product);
    
    // Simulate loading for better UX
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  const discountPercentage = product.originalPrice 
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  return (
    <div
      className={`group relative glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 mobile-safe ${
        isHovered ? 'glass-gold' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
          -{discountPercentage}%
        </div>
      )}

      {/* Product Icon */}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 transition-all duration-300 ${
          isHovered 
            ? 'bg-gradient-to-r from-primary-gold to-primary-orange text-black' 
            : 'glass-dark text-primary-gold'
        }`}>
          <i className={`${product.icon} text-3xl`}></i>
        </div>
        
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-primary-gold transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-primary-gold font-semibold mb-3 flex items-center">
          <i className="fas fa-star mr-2"></i>
          Tính năng nổi bật:
        </h4>
        <ul className="space-y-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <i className="fas fa-check text-primary-gold mr-2 mt-1 flex-shrink-0"></i>
              <span>{feature}</span>
            </li>
          ))}
          {product.features.length > 3 && (
            <li className="text-sm text-primary-gold">
              +{product.features.length - 3} tính năng khác...
            </li>
          )}
        </ul>
      </div>

      {/* Product Info */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 text-center">
        <div className="glass-dark rounded-lg p-2 sm:p-3">
          <i className="fas fa-clock text-primary-gold mb-1 text-sm"></i>
          <div className="text-xs text-gray-400">Thời hạn</div>
          <div className="text-xs sm:text-sm font-semibold text-white">{product.duration}</div>
        </div>
        <div className="glass-dark rounded-lg p-2 sm:p-3">
          <i className="fas fa-shield-alt text-primary-gold mb-1 text-sm"></i>
          <div className="text-xs text-gray-400">Bảo hành</div>
          <div className="text-xs sm:text-sm font-semibold text-white">{product.warranty}</div>
        </div>
        <div className="glass-dark rounded-lg p-2 sm:p-3">
          <i className="fas fa-shipping-fast text-primary-gold mb-1 text-sm"></i>
          <div className="text-xs text-gray-400">Giao hàng</div>
          <div className="text-xs sm:text-sm font-semibold text-white">{product.delivery}</div>
        </div>
      </div>

      {/* Pricing */}
      <div className="text-center mb-6">
        {product.originalPrice && (
          <div className="text-gray-500 line-through text-base sm:text-lg mb-1">
            {formatCurrency(product.originalPrice)}
          </div>
        )}
        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
          {formatCurrency(product.price)}
        </div>
        <div className="text-xs sm:text-sm text-gray-400 mt-1">
          Tiết kiệm {formatCurrency((product.originalPrice || product.price) - product.price)}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 ${
          isAdding
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-primary-gold to-primary-orange text-black hover:scale-105 hover:shadow-lg hover:shadow-primary-gold/25'
        }`}
      >
        {isAdding ? (
          <div className="flex items-center justify-center">
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Đang thêm...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <i className="fas fa-cart-plus mr-2"></i>
            Thêm vào giỏ
          </div>
        )}
      </button>

      {/* Popular Badge */}
      {product.id === 'chatgpt-plus' && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          <i className="fas fa-fire mr-1"></i>
          Bán chạy
        </div>
      )}
    </div>
  );
};

export default ProductCard;
