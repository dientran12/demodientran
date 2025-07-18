import React from 'react';
import { scrollToElement } from '../utils';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    scrollToElement('products');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center glass-gold px-6 py-2 rounded-full mb-8 animate-pulse">
            <i className="fas fa-star text-primary-gold mr-2"></i>
            <span className="text-yellow-400 font-semibold">Tài khoản số #1 Việt Nam</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tài Khoản Số
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent animate-glow">
              Cao Cấp
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sở hữu ngay các tài khoản premium như 
            <span className="text-primary-gold font-semibold"> Canva Pro</span>, 
            <span className="text-primary-gold font-semibold"> ChatGPT Plus</span>, 
            <span className="text-primary-gold font-semibold"> Veo 3</span> với giá ưu đãi nhất thị trường
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: 'fas fa-bolt', text: 'Giao hàng tức thì' },
              { icon: 'fas fa-shield-alt', text: 'Bảo hành 30 ngày' },
              { icon: 'fas fa-headset', text: 'Hỗ trợ 24/7' },
              { icon: 'fas fa-tags', text: 'Giá tốt nhất' }
            ].map((feature, index) => (
              <div key={index} className="glass px-4 py-2 rounded-lg">
                <i className={`${feature.icon} text-primary-gold mr-2`}></i>
                <span className="text-white text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCTAClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-gold to-primary-orange text-black font-bold rounded-lg text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-gold/25"
            >
              <span className="relative z-10">Xem Sản Phẩm Ngay</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
            
            <button
              onClick={() => scrollToElement('contact')}
              className="glass-gold px-8 py-4 text-primary-gold font-bold rounded-lg text-lg hover:scale-105 transition-all duration-300 border border-primary-gold/30"
            >
              <i className="fas fa-phone mr-2"></i>
              Tư Vấn Miễn Phí
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { number: '10,000+', label: 'Khách hàng tin tưởng' },
              { number: '99.9%', label: 'Tỷ lệ thành công' },
              { number: '24/7', label: 'Hỗ trợ không ngừng' },
              { number: '30 ngày', label: 'Bảo hành toàn diện' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleCTAClick}
          className="text-primary-gold hover:text-primary-orange transition-colors duration-300"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
