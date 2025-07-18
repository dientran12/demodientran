import React, { useState } from 'react';
import { faqs } from '../data/products';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'fas fa-th-large' },
    { id: 'delivery', name: 'Giao hàng', icon: 'fas fa-shipping-fast' },
    { id: 'warranty', name: 'Bảo hành', icon: 'fas fa-shield-alt' },
    { id: 'payment', name: 'Thanh toán', icon: 'fas fa-credit-card' },
    { id: 'account', name: 'Tài khoản', icon: 'fas fa-user' },
    { id: 'support', name: 'Hỗ trợ', icon: 'fas fa-headset' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-gold px-6 py-2 rounded-full mb-6">
            <i className="fas fa-question-circle text-primary-gold mr-2"></i>
            <span className="text-primary-gold font-semibold">Câu hỏi thường gặp</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Giải Đáp
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
              Thắc Mắc
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tìm hiểu thêm về dịch vụ của chúng tôi qua những câu hỏi thường gặp. 
            Nếu không tìm thấy câu trả lời, hãy liên hệ với chúng tôi.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
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

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:glass-gold"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-gold to-primary-orange rounded-lg flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transition-transform duration-300 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}>
                    <i className="fas fa-chevron-down text-primary-gold"></i>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="pl-12">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-dark rounded-2xl p-8 max-w-md mx-auto">
                <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Không tìm thấy câu hỏi
                </h3>
                <p className="text-gray-400">
                  Hiện tại chưa có câu hỏi nào trong danh mục này.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-20">
          <div className="glass-gold rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <i className="fas fa-headset text-4xl text-primary-gold mb-4"></i>
              <h3 className="text-3xl font-bold text-white mb-4">
                Vẫn có thắc mắc?
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Đội ngũ hỗ trợ chuyên nghiệp của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-dark rounded-xl p-6">
                <i className="fas fa-phone text-2xl text-primary-gold mb-3"></i>
                <h4 className="text-white font-semibold mb-2">Hotline</h4>
                <p className="text-gray-300 text-sm">0123.456.789</p>
                <p className="text-gray-400 text-xs">24/7 - Miễn phí</p>
              </div>
              
              <div className="glass-dark rounded-xl p-6">
                <i className="fab fa-telegram text-2xl text-primary-gold mb-3"></i>
                <h4 className="text-white font-semibold mb-2">Telegram</h4>
                <p className="text-gray-300 text-sm">@premiumaccounts</p>
                <p className="text-gray-400 text-xs">Phản hồi nhanh nhất</p>
              </div>
              
              <div className="glass-dark rounded-xl p-6">
                <i className="fas fa-envelope text-2xl text-primary-gold mb-3"></i>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300 text-sm">support@premium.vn</p>
                <p className="text-gray-400 text-xs">Phản hồi trong 1h</p>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-gold to-primary-orange text-black font-bold px-8 py-4 rounded-xl text-lg hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-comments mr-2"></i>
              Liên Hệ Ngay
            </button>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 Mẹo Sử Dụng Hiệu Quả
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'fas fa-clock',
                title: 'Mua vào giờ vàng',
                tip: 'Mua từ 9h-17h để được hỗ trợ nhanh nhất'
              },
              {
                icon: 'fas fa-users',
                title: 'Mua theo nhóm',
                tip: 'Mua nhiều tài khoản cùng lúc để được giảm giá'
              },
              {
                icon: 'fas fa-bookmark',
                title: 'Lưu thông tin',
                tip: 'Lưu lại thông tin tài khoản để dễ quản lý'
              }
            ].map((tip, index) => (
              <div key={index} className="glass-dark rounded-xl p-6 text-center">
                <i className={`${tip.icon} text-2xl text-primary-gold mb-3`}></i>
                <h4 className="text-white font-semibold mb-2">{tip.title}</h4>
                <p className="text-gray-400 text-sm">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
