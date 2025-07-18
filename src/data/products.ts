import type { Product, Testimonial, FAQ } from '../types';

export const products: Product[] = [
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    description: 'Tài khoản Canva Pro cao cấp với đầy đủ tính năng thiết kế chuyên nghiệp',
    price: 299000,
    originalPrice: 599000,
    features: [
      'Truy cập không giới hạn templates premium',
      'Thư viện hình ảnh và video khổng lồ',
      'Công cụ AI Magic Studio',
      'Xuất file chất lượng cao',
      'Làm việc nhóm không giới hạn'
    ],
    icon: 'fas fa-palette',
    category: 'design',
    duration: '12 tháng',
    warranty: '30 ngày',
    delivery: 'Tức thì'
  },
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    description: 'Tài khoản ChatGPT Plus với GPT-4 và các tính năng AI tiên tiến nhất',
    price: 449000,
    originalPrice: 899000,
    features: [
      'Truy cập GPT-4 không giới hạn',
      'Tốc độ phản hồi nhanh hơn',
      'Plugin và browsing internet',
      'DALL-E 3 tích hợp',
      'Code Interpreter'
    ],
    icon: 'fas fa-robot',
    category: 'ai',
    duration: '12 tháng',
    warranty: '30 ngày',
    delivery: 'Tức thì'
  },
  {
    id: 'veo-3',
    name: 'Veo 3',
    description: 'Tài khoản Veo 3 - AI tạo video từ text tiên tiến nhất hiện tại',
    price: 699000,
    originalPrice: 1299000,
    features: [
      'Tạo video AI chất lượng 4K',
      'Thời lượng video lên đến 60s',
      'Điều khiển camera chuyên nghiệp',
      'Hiệu ứng và chuyển cảnh tự động',
      'Xuất video không watermark'
    ],
    icon: 'fas fa-video',
    category: 'video',
    duration: '12 tháng',
    warranty: '30 ngày',
    delivery: 'Tức thì'
  },
  {
    id: 'grok-4',
    name: 'Grok 4',
    description: 'Tài khoản Grok 4 - AI chatbot thông minh với khả năng phân tích real-time',
    price: 399000,
    originalPrice: 799000,
    features: [
      'AI model Grok-4 mới nhất',
      'Phân tích dữ liệu real-time',
      'Tích hợp X (Twitter) platform',
      'Khả năng reasoning tiên tiến',
      'API access không giới hạn'
    ],
    icon: 'fas fa-brain',
    category: 'ai',
    duration: '12 tháng',
    warranty: '30 ngày',
    delivery: 'Tức thì'
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro',
    description: 'Tài khoản CapCut Pro với công cụ edit video AI chuyên nghiệp',
    price: 199000,
    originalPrice: 399000,
    features: [
      'Templates video premium',
      'AI auto-editing thông minh',
      'Hiệu ứng và filter cao cấp',
      'Xuất video 4K không giới hạn',
      'Thư viện nhạc bản quyền'
    ],
    icon: 'fas fa-cut',
    category: 'video',
    duration: '12 tháng',
    warranty: '30 ngày',
    delivery: 'Tức thì'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nguyễn Minh Anh',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    rating: 5,
    comment: 'Tài khoản Canva Pro hoạt động hoàn hảo! Thiết kế của tôi chuyên nghiệp hơn rất nhiều.',
    product: 'Canva Pro',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Trần Văn Hùng',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    rating: 5,
    comment: 'ChatGPT Plus giúp công việc của tôi hiệu quả gấp 10 lần. Đáng đồng tiền bát gạo!',
    product: 'ChatGPT Plus',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Lê Thị Mai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    comment: 'Veo 3 tạo video AI cực kỳ ấn tượng. Khách hàng của tôi rất thích!',
    product: 'Veo 3',
    date: '2024-01-08'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Tài khoản có hoạt động ngay lập tức không?',
    answer: 'Có, tất cả tài khoản được giao ngay sau khi thanh toán thành công. Bạn sẽ nhận được thông tin đăng nhập qua email trong vòng 5 phút.',
    category: 'delivery'
  },
  {
    id: '2',
    question: 'Thời gian bảo hành là bao lâu?',
    answer: 'Tất cả tài khoản đều có bảo hành 30 ngày. Nếu có vấn đề gì, chúng tôi sẽ thay thế miễn phí hoặc hoàn tiền 100%.',
    category: 'warranty'
  },
  {
    id: '3',
    question: 'Có thể thay đổi thông tin tài khoản không?',
    answer: 'Có, bạn có thể thay đổi mật khẩu và một số thông tin cá nhân sau khi nhận tài khoản. Chúng tôi sẽ hướng dẫn chi tiết.',
    category: 'account'
  },
  {
    id: '4',
    question: 'Phương thức thanh toán nào được hỗ trợ?',
    answer: 'Chúng tôi hỗ trợ chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay), và thẻ tín dụng/ghi nợ.',
    category: 'payment'
  },
  {
    id: '5',
    question: 'Tài khoản có bị khóa không?',
    answer: 'Tài khoản của chúng tôi được tạo hợp pháp và ít khi bị khóa. Nếu có vấn đề, chúng tôi sẽ hỗ trợ thay thế ngay lập tức.',
    category: 'security'
  },
  {
    id: '6',
    question: 'Có hỗ trợ kỹ thuật không?',
    answer: 'Có, đội ngũ hỗ trợ 24/7 sẵn sàng giúp bạn qua Telegram, Zalo, hoặc email. Phản hồi trong vòng 30 phút.',
    category: 'support'
  }
];
