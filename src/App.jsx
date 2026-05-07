import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { CartDrawer } from './components/CartDrawer'
import { HeroSection } from './components/HeroSection'
import { FeaturedSection } from './components/FeaturedSection'
import { StoreSection } from './components/StoreSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <CartDrawer />
        <main>
          <HeroSection />
          <FeaturedSection />
          <StoreSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
