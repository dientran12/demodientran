// Product interface for premium accounts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  icon: string;
  category: 'design' | 'ai' | 'video' | 'productivity';
  duration: string;
  warranty: string;
  delivery: string;
}

// Cart item interface
export interface CartItem {
  product: Product;
  quantity: number;
}

// Cart context interface
export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

// Contact form interface
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  products: string[];
}

// Testimonial interface
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
}

// FAQ interface
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Navigation item interface
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
