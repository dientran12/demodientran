
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-black via-primary-dark to-black mobile-safe">
        <Header />
        <main className="mobile-safe">
          <Hero />
          <Products />
          <Features />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
