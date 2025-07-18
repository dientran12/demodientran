import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'fas fa-bolt',
      title: 'Giao Hàng Tức Thì',
      description: 'Nhận tài khoản ngay sau khi thanh toán thành công. Không cần chờ đợi, bắt đầu sử dụng ngay lập tức.',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Giao hàng trong 5 phút', 'Tự động qua email', 'Hướng dẫn chi tiết']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Bảo Hành Toàn Diện',
      description: 'Cam kết bảo hành 30 ngày cho tất cả sản phẩm. Nếu có vấn đề, chúng tôi thay thế hoặc hoàn tiền 100%.',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Bảo hành 30 ngày', 'Thay thế miễn phí', 'Hoàn tiền 100%']
    },
    {
      icon: 'fas fa-headset',
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ hỗ trợ chuyên nghiệp luôn sẵn sàng giúp đỡ bạn mọi lúc, mọi nơi qua nhiều kênh liên lạc.',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Hỗ trợ 24/7', 'Đa kênh liên lạc', 'Phản hồi nhanh chóng']
    },
    {
      icon: 'fas fa-tags',
      title: 'Giá Tốt Nhất',
      description: 'Cam kết mang đến giá cả cạnh tranh nhất thị trường với chất lượng dịch vụ hàng đầu.',
      color: 'from-orange-500 to-red-500',
      benefits: ['Giá cạnh tranh', 'Ưu đãi thường xuyên', 'Không phí ẩn']
    },
    {
      icon: 'fas fa-lock',
      title: 'Bảo Mật Tuyệt Đối',
      description: 'Thông tin khách hàng được bảo mật tuyệt đối. Tài khoản được tạo hợp pháp và an toàn.',
      color: 'from-indigo-500 to-blue-500',
      benefits: ['Mã hóa SSL', 'Bảo mật thông tin', 'Tài khoản hợp pháp']
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Cập Nhật Liên Tục',
      description: 'Luôn cập nhật các tính năng mới nhất và đảm bảo tài khoản hoạt động ổn định lâu dài.',
      color: 'from-teal-500 to-green-500',
      benefits: ['Cập nhật tự động', 'Tính năng mới', 'Ổn định lâu dài']
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-gold px-6 py-2 rounded-full mb-6">
            <i className="fas fa-star text-primary-gold mr-2"></i>
            <span className="text-primary-gold font-semibold">Tại sao chọn chúng tôi</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Lợi Ích Vượt Trội
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-gold to-primary-orange bg-clip-text text-transparent">
              Dành Cho Bạn
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi cam kết mang đến trải nghiệm mua sắm tài khoản số tốt nhất 
            với dịch vụ chuyên nghiệp và đáng tin cậy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:glass-gold"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-gold transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <i className="fas fa-check text-primary-gold mr-3 flex-shrink-0"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Được Tin Tưởng Bởi Hàng Nghìn Khách Hàng
            </h3>
            <p className="text-gray-300 text-lg">
              Chúng tôi tự hào là đối tác đáng tin cậy của các cá nhân và doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fas fa-users', number: '10,000+', label: 'Khách hàng hài lòng' },
              { icon: 'fas fa-chart-line', number: '99.9%', label: 'Tỷ lệ thành công' },
              { icon: 'fas fa-clock', number: '5 phút', label: 'Thời gian giao hàng' },
              { icon: 'fas fa-medal', number: '4.9/5', label: 'Đánh giá trung bình' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-dark rounded-xl p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-r ${features[index % features.length].color}`}>
                  <i className={`${stat.icon} text-white`}></i>
                </div>
                <div className="text-2xl font-bold text-primary-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-gold rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Sẵn sàng trải nghiệm dịch vụ tốt nhất?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Hãy để chúng tôi giúp bạn sở hữu những tài khoản premium tốt nhất với giá ưu đãi nhất
            </p>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-gold to-primary-orange text-black font-bold px-8 py-4 rounded-xl text-lg hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
