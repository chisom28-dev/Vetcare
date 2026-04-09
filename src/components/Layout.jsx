import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import { smoothEase } from '../lib/animations';

export default function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
      <header className="fixed top-0 w-full z-50 bg-[#f8faf9]/80 backdrop-blur-xl border-b border-outline-variant/10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-black text-[#0f5238] font-headline tracking-tight">
            VetCare
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`${location.pathname === link.path ? 'text-[#0f5238] border-b-2 border-[#0f5238] pb-1' : 'text-slate-600 hover:text-[#0f5238] transition-colors'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block px-8 py-3 bg-primary text-on-primary rounded-full font-bold hover:bg-primary-fixed-dim transition-all scale-95 active:scale-90">
              Contact Us
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-[#0f5238]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-[#f8faf9] border-b border-outline-variant/10 shadow-xl md:hidden"
            >
              <div className="flex flex-col p-8 gap-6 font-headline font-bold tracking-tight">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`text-xl transition-colors ${location.pathname === link.path ? 'text-[#0f5238]' : 'text-slate-600 hover:text-[#0f5238]'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-center hover:bg-primary-fixed-dim transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="bg-[#f2f4f3] w-full py-12 px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold text-[#0f5238] font-headline">
              VetCare
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 VetCare Clinical Sanctuary. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link to="/about" className="text-slate-500 hover:text-[#0f5238] transition-colors">About Us</Link>
            <Link to="/contact" className="text-slate-500 hover:text-[#0f5238] transition-colors">Contact Us</Link>
            <a href="#" className="text-slate-500 hover:text-[#0f5238] transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-[#0f5238] transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-[#0f5238] transition-colors">Emergency Care</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
