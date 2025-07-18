import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/products';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? 'text-primary-gold' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-gold px-6 py-2 rounded-full mb-6">
            <i className="fas fa-heart text-primary-gold mr-2"></i>
            <span className="text-primary-gold font-semibold">Khách hàng nói gì</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Đánh Giá Từ
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
              Khách Hàng
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi. 
            Hãy xem họ nói gì về trải nghiệm mua sắm tại đây.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="glass rounded-3xl p-8 lg:p-12 text-center">
            {/* Quote Icon */}
            <div className="text-6xl text-primary-gold/20 mb-6">
              <i className="fas fa-quote-left"></i>
            </div>

            {/* Testimonial Content */}
            <div className="mb-8">
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].comment}"
              </p>
              
              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-gold">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=FFD700&color=000000&size=64`;
                  }}
                />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary-gold text-sm">
                  Khách hàng {testimonials[currentIndex].product}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary-gold transition-colors duration-300"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary-gold transition-colors duration-300"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-gold scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'glass-gold' : 'hover:glass-gold'
              }`}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-gold/30">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=FFD700&color=000000&size=48`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-gold text-sm">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20">
          <div className="glass-dark rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Được Tin Tưởng Bởi Cộng Đồng
              </h3>
              <p className="text-gray-300">
                Tham gia cùng hàng nghìn khách hàng hài lòng
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-gold mb-2">4.9/5</div>
                <div className="text-gray-400 text-sm">Đánh giá trung bình</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-gold mb-2">10,000+</div>
                <div className="text-gray-400 text-sm">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-gold mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Tỷ lệ thành công</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-gold mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
