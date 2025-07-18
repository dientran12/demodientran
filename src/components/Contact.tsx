import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency, isValidEmail, isValidPhone } from '../utils';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
    products: items.map(item => `${item.product.name} (x${item.quantity})`)
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (items.length === 0) {
      newErrors.message = 'Vui lòng chọn ít nhất một sản phẩm';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      clearCart();
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        products: []
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-gold rounded-3xl p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-3xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Đặt hàng thành công!
              </h2>
              <p className="text-gray-300 mb-6">
                Cảm ơn bạn đã tin tưởng dịch vụ của chúng tôi. Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút để xác nhận đơn hàng.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-primary-gold to-primary-orange text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
              >
                Đặt hàng mới
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-gold px-6 py-2 rounded-full mb-6">
            <i className="fas fa-shopping-cart text-primary-gold mr-2"></i>
            <span className="text-primary-gold font-semibold">Đặt hàng ngay</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hoàn Tất
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
              Đơn Hàng
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Điền thông tin bên dưới để hoàn tất đơn hàng. Chúng tôi sẽ liên hệ với bạn ngay lập tức.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-list-alt text-primary-gold mr-3"></i>
                Đơn hàng của bạn
              </h3>

              {items.length === 0 ? (
                <div className="text-center py-8">
                  <i className="fas fa-shopping-cart text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-400">Giỏ hàng trống</p>
                  <button
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-4 text-primary-gold hover:text-primary-orange transition-colors duration-300"
                  >
                    Thêm sản phẩm →
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex items-center justify-between glass-dark rounded-lg p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-gold to-primary-orange rounded-lg flex items-center justify-center">
                            <i className={`${item.product.icon} text-black`}></i>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{item.product.name}</h4>
                            <p className="text-gray-400 text-sm">Số lượng: {item.quantity}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-primary-gold font-bold">
                            {formatCurrency(item.product.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span className="text-white">Tổng cộng:</span>
                      <span className="text-primary-gold">{formatCurrency(getTotalPrice())}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-user text-primary-gold mr-3"></i>
                Thông tin liên hệ
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all duration-300 ${
                      errors.name ? 'ring-2 ring-red-500' : ''
                    }`}
                    placeholder="Nhập họ và tên của bạn"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all duration-300 ${
                      errors.email ? 'ring-2 ring-red-500' : ''
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all duration-300 ${
                      errors.phone ? 'ring-2 ring-red-500' : ''
                    }`}
                    placeholder="0123456789"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Ghi chú (tùy chọn)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full glass-dark rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all duration-300 resize-none"
                    placeholder="Thêm ghi chú cho đơn hàng..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting || items.length === 0
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-gold to-primary-orange text-black hover:scale-105 hover:shadow-lg hover:shadow-primary-gold/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Đang xử lý...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <i className="fas fa-paper-plane mr-2"></i>
                      Đặt hàng ngay ({formatCurrency(getTotalPrice())})
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-20">
          <div className="glass-gold rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Liên hệ trực tiếp
              </h3>
              <p className="text-gray-300">
                Cần hỗ trợ ngay? Liên hệ với chúng tôi qua các kênh sau
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass-dark rounded-xl p-6">
                <i className="fas fa-phone text-3xl text-primary-gold mb-4"></i>
                <h4 className="text-white font-bold mb-2">Hotline</h4>
                <p className="text-gray-300">0123.456.789</p>
                <p className="text-gray-400 text-sm">24/7 - Miễn phí</p>
              </div>

              <div className="text-center glass-dark rounded-xl p-6">
                <i className="fab fa-telegram text-3xl text-primary-gold mb-4"></i>
                <h4 className="text-white font-bold mb-2">Telegram</h4>
                <p className="text-gray-300">@premiumaccounts</p>
                <p className="text-gray-400 text-sm">Phản hồi nhanh nhất</p>
              </div>

              <div className="text-center glass-dark rounded-xl p-6">
                <i className="fas fa-envelope text-3xl text-primary-gold mb-4"></i>
                <h4 className="text-white font-bold mb-2">Email</h4>
                <p className="text-gray-300">support@premium.vn</p>
                <p className="text-gray-400 text-sm">Phản hồi trong 1h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
