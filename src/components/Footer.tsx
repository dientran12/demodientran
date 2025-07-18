import React from 'react';
import { scrollToElement } from '../utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Về chúng tôi', href: 'hero' },
      { label: 'Sản phẩm', href: 'products' },
      { label: 'Tính năng', href: 'features' },
      { label: 'Đánh giá', href: 'testimonials' },
    ],
    support: [
      { label: 'FAQ', href: 'faq' },
      { label: 'Liên hệ', href: 'contact' },
      { label: 'Hướng dẫn sử dụng', href: '#' },
      { label: 'Báo cáo lỗi', href: '#' },
    ],
    legal: [
      { label: 'Điều khoản dịch vụ', href: '#' },
      { label: 'Chính sách bảo mật', href: '#' },
      { label: 'Chính sách hoàn tiền', href: '#' },
      { label: 'Chính sách bảo hành', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: 'fab fa-facebook', href: '#', label: 'Facebook' },
    { icon: 'fab fa-telegram', href: '#', label: 'Telegram' },
    { icon: 'fab fa-youtube', href: '#', label: 'YouTube' },
    { icon: 'fab fa-tiktok', href: '#', label: 'TikTok' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#') && href !== '#') {
      scrollToElement(href.substring(1));
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-primary-dark border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-gold to-primary-orange rounded-lg flex items-center justify-center">
                  <i className="fas fa-crown text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
                    PremiumAccounts
                  </h3>
                  <p className="text-gray-400 text-sm">Tài khoản số cao cấp</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Chuyên cung cấp các tài khoản premium chất lượng cao với giá ưu đãi nhất thị trường. 
                Giao hàng tức thì, bảo hành toàn diện.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-primary-gold"></i>
                  <span className="text-gray-300">0123.456.789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary-gold"></i>
                  <span className="text-gray-300">support@premium.vn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-primary-gold"></i>
                  <span className="text-gray-300">Hà Nội, Việt Nam</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Công ty</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Hỗ trợ</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Pháp lý</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-primary-gold transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} PremiumAccounts. Tất cả quyền được bảo lưu.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Theo dõi chúng tôi:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-gold hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => scrollToElement('hero')}
              className="glass w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-gold hover:scale-110 transition-all duration-300"
              aria-label="Về đầu trang"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <i className="fas fa-shield-alt text-green-500"></i>
              <span className="text-gray-400 text-sm">Bảo mật SSL</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-blue-500"></i>
              <span className="text-gray-400 text-sm">Đã xác minh</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-award text-yellow-500"></i>
              <span className="text-gray-400 text-sm">Chất lượng cao</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-headset text-purple-500"></i>
              <span className="text-gray-400 text-sm">Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
