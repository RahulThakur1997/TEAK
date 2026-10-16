import React, { useState, useEffect } from 'react';
import { TeakLogo } from './TeakLogo';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConsult?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Advantage', href: '#tradition' },
    { label: 'Our Sectors', href: '#sectors' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Before & After', href: '#showcase' },
    { label: 'In-House Trades', href: '#trades' },
    { label: 'Client Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-[#08090B]/75 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#" className="flex items-center focus:outline-none">
            <TeakLogo variant="full" />
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#CCCCCC] hover:text-white transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:0390008325"
              className="text-xs font-mono text-[#999999] hover:text-white transition-colors flex items-center gap-1.5"
              title="Call Directors Desk"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>03 9000 TEAK</span>
            </a>

            <a
              href="#qualification-widget"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white border border-white hover:bg-white hover:text-black transition-all duration-200 shadow-sm"
            >
              Request Estimate ↗
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center sm:hidden gap-3">
            <a
              href="#qualification-widget"
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white border border-white"
            >
              Estimate ↗
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#CCCCCC] hover:text-white focus:outline-none border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0C10] border-b border-white/15 px-6 pt-4 pb-8 space-y-4">
          <div className="text-[10px] font-mono tracking-widest text-[#888888] uppercase mb-2 flex items-center gap-2">
            <ShieldCheck className="w-3 h-3 text-white" />
            <span>REGISTERED BUILDER CB-L 67337</span>
          </div>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider uppercase text-white hover:text-[#999999] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 space-y-3">
            <a
              href="#qualification-widget"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center bg-white text-black text-xs font-bold uppercase tracking-widest"
            >
              Request Estimate ↗
            </a>
            <a
              href="tel:0390008325"
              className="block w-full py-2.5 text-center border border-white/20 text-[#CCCCCC] text-xs font-mono"
            >
              Call James & Matthew: 03 9000 8325
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
