import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import GLEAMPage from './pages/projects/GLEAMPage';
import PegadaianPage from './pages/projects/PegadaianPage';
import SalesShippingPage from './pages/projects/SalesShippingPage';
import PizzaSalesPage from './pages/projects/PizzaSalesPage';
import NotFoundPage from './pages/NotFoundPage';

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
        <Routes>
          <Route path="/" element={<><Navbar /><main className="flex-grow"><HomePage /></main><Footer /></>} />
          <Route path="/projects/gleam" element={<><Navbar /><main className="flex-grow"><GLEAMPage /></main><Footer /></>} />
          <Route path="/projects/pegadaian" element={<><Navbar /><main className="flex-grow"><PegadaianPage /></main><Footer /></>} />
          <Route path="/projects/sales-shipping" element={<><Navbar /><main className="flex-grow"><SalesShippingPage /></main><Footer /></>} />
          <Route path="/projects/pizza-sales" element={<><Navbar /><main className="flex-grow"><PizzaSalesPage /></main><Footer /></>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
