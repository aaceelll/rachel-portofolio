import { Link, useLocation } from 'react-router-dom';
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
  ];

  const handleNavClick = (e, href) => {
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo / Hello Badge */}
          <Link to="/" className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold bg-orange text-white rounded-full">
              Rachel's Portofolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-text-secondary hover:text-orange transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/rachel-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary hover:text-orange transition-colors duration-200"
            >
              Download CV
            </a>
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="btn-primary text-xs px-5 py-2"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiXMark size={24} /> : <HiOutlineBars3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-bg-surface border-t border-white/5">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-orange hover:bg-bg-card rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/rachel-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-orange hover:bg-bg-card rounded-lg transition-colors"
            >
              Download CV
            </a>
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="block text-center btn-primary mx-4 mt-4"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
