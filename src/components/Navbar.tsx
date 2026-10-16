import React, { useState, useEffect } from 'react';
import { TeakLogo } from './TeakLogo';
import { Menu, X, Phone, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsult?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'In-House Advantage', href: '#advantage' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Client Endorsements', href: '#endorsements' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      {/* Floating Frosted Glass Capsule */}
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto border ${
          isScrolled
            ? 'bg-[#0a0c12]/85 backdrop-blur-xl border-[#d4af37]/25 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] py-2.5 px-5'
            : 'bg-[#0f1117]/70 backdrop-blur-md border-white/10 py-3 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]">
            <TeakLogo variant="full" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-medium text-[#94a3b8] hover:text-white transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Dynamic CTA with warm gold pulse ring */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:0390008325"
              className="text-xs font-mono text-[#94a3b8] hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
              title="Direct Director Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden xl:inline">03 9000 TEAK</span>
            </a>

            {/* Dynamic CTA with warm gold ambient pulse ring */}
            <div className="relative group">
              <span className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37] to-[#c5a880] rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></span>
              <button
                type="button"
                onClick={onOpenConsult}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#e7c975] to-[#c5a880] hover:from-white hover:to-[#e2e8f0] rounded-full transition-all duration-300 shadow-md gap-1"
              >
                <span>Consult a Director</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              type="button"
              onClick={onOpenConsult}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-[#d4af37] rounded-full"
            >
              Consult ↗
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e2e8f0] hover:text-white focus:outline-none rounded-full border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 max-w-7xl mx-auto bg-[#0a0c12]/95 backdrop-blur-2xl rounded-2xl border border-[#d4af37]/30 p-6 space-y-4 shadow-2xl pointer-events-auto">
          <div className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>VICTORIAN COMMERCIAL BUILDER CB-L 67337</span>
          </div>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider uppercase text-white hover:text-[#d4af37] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsult) onOpenConsult();
              }}
              className="block w-full py-3 text-center bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-black text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg"
            >
              Consult a Director ↗
            </button>
            <a
              href="tel:0390008325"
              className="block w-full py-2.5 text-center border border-[#d4af37]/30 text-[#e2e8f0] text-xs font-mono rounded-lg"
            >
              Direct Dial: 03 9000 8325
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
