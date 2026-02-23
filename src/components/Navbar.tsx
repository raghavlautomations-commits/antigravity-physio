import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const phoneNumber = "+91 98765 43210";

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        (isScrolled || !isHomePage) ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-bold tracking-tight",
                (isScrolled || !isHomePage) ? "text-primary" : "text-white"
              )}>
                Lifeline Health Care
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-semibold",
                (isScrolled || !isHomePage) ? "text-slate-500" : "text-white/80"
              )}>
                Physiotherapy Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    (isScrolled || !isHomePage) ? 'text-slate-600' : 'text-white'
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    (isScrolled || !isHomePage) ? 'text-slate-600' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all',
                (isScrolled || !isHomePage)
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-md'
                  : 'bg-white text-primary hover:bg-slate-100'
              )}
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-2 rounded-md',
                (isScrolled || !isHomePage) ? 'text-slate-600' : 'text-white'
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-4 px-3">
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg"
              >
                <Phone size={18} />
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
