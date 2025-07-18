import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import type { Product } from '../types';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'fas fa-th-large' },
    { id: 'ai', name: 'AI Tools', icon: 'fas fa-robot' },
    { id: 'design', name: 'Thiết kế', icon: 'fas fa-palette' },
    { id: 'video', name: 'Video', icon: 'fas fa-video' },
    { id: 'productivity', name: 'Năng suất', icon: 'fas fa-tasks' },
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === categoryId));
    }
  };

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-gold px-6 py-2 rounded-full mb-6">
            <i className="fas fa-crown text-primary-gold mr-2"></i>
            <span className="text-primary-gold font-semibold">Sản phẩm cao cấp</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tài Khoản Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
              Giá Tốt Nhất
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sở hữu ngay các tài khoản premium hàng đầu với giá ưu đãi đặc biệt. 
            Giao hàng tức thì, bảo hành 30 ngày, hỗ trợ 24/7.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-gold to-primary-orange text-black'
                  : 'glass text-white hover:glass-gold hover:text-primary-gold'
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="glass-dark rounded-2xl p-8 max-w-md mx-auto">
              <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">
                Không tìm thấy sản phẩm
              </h3>
              <p className="text-gray-400">
                Hiện tại chưa có sản phẩm nào trong danh mục này.
              </p>
            </div>
          </div>
        )}

        {/* Special Offers */}
        <div className="mt-20">
          <div className="glass-gold rounded-2xl p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                🎉 Ưu đãi đặc biệt cho khách hàng mới!
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Mua 2 tài khoản bất kỳ và nhận ngay <span className="text-primary-gold font-bold">giảm 15%</span> tổng đơn hàng
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center glass-dark px-4 py-2 rounded-lg">
                  <i className="fas fa-gift text-primary-gold mr-2"></i>
                  <span className="text-white">Tặng kèm hướng dẫn sử dụng</span>
                </div>
                <div className="flex items-center glass-dark px-4 py-2 rounded-lg">
                  <i className="fas fa-headset text-primary-gold mr-2"></i>
                  <span className="text-white">Hỗ trợ setup miễn phí</span>
                </div>
                <div className="flex items-center glass-dark px-4 py-2 rounded-lg">
                  <i className="fas fa-shield-alt text-primary-gold mr-2"></i>
                  <span className="text-white">Bảo hành mở rộng 60 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
