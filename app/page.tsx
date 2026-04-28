import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <PortfolioGrid />
      <Footer />
    </div>
  );
}
