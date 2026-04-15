import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import GLEAMPage from './pages/projects/GLEAMPage';
import PegadaianPage from './pages/projects/PegadaianPage';
import SalesShippingPage from './pages/projects/SalesShippingPage';
import PizzaSalesPage from './pages/projects/PizzaSalesPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/gleam" element={<GLEAMPage />} />
            <Route path="/projects/pegadaian" element={<PegadaianPage />} />
            <Route path="/projects/sales-shipping" element={<SalesShippingPage />} />
            <Route path="/projects/pizza-sales" element={<PizzaSalesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
