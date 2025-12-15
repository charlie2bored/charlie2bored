import Navigation from '@/components/Navigation';
import Shop from '@/components/Shop';
import Footer from '@/components/Footer';

export default function ShopPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      minHeight: '100vh'
    }}>
      <Navigation />
      <div className="pt-[120px]">
        <Shop />
      </div>
      <Footer />
    </div>
  );
}
