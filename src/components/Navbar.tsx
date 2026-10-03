import React, { useState } from 'react';
import { SoleLogo } from './SoleLogo';
import { createWhatsAppUrl } from '../content';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const waUrl = createWhatsAppUrl();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Logo tidak wrap) */}
        <a
          href="#"
          className="flex items-center whitespace-nowrap shrink-0 py-2 focus:outline-none"
          aria-label="Sole Solution Beranda"
        >
          <SoleLogo size="md" showSubtitle={true} theme="light" />
        </a>

        {/* Zone 2: Navigation Links: Kenapa Kami, Tiga Program, Alur 7 Langkah, Bukti, FAQ */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 whitespace-nowrap">
          <a href="#program" className="hover:text-[#0f2e5f] transition-colors py-1">
            Tiga Program
          </a>
          <a href="#kenapa-kami" className="hover:text-[#0f2e5f] transition-colors py-1">
            Kenapa Kami
          </a>
          <a href="#alur-kerja" className="hover:text-[#0f2e5f] transition-colors py-1">
            Alur 7 Langkah
          </a>
          <a href="#bukti" className="hover:text-[#0f2e5f] transition-colors py-1">
            Bukti
          </a>
          <a href="#faq" className="hover:text-[#0f2e5f] transition-colors py-1">
            FAQ
          </a>
        </nav>

        {/* Zone 3: Satu Tombol WA + Hamburger di bawah 1024px */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-[#FFC43D] text-[#0F172A] hover:bg-[#ffbe26] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Hubungi WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Hamburger button untuk < 1024px */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a
              href="#program"
              onClick={closeMenu}
              className="px-2 py-2 rounded-md hover:bg-slate-50 hover:text-[#0f2e5f]"
            >
              Tiga Program
            </a>
            <a
              href="#kenapa-kami"
              onClick={closeMenu}
              className="px-2 py-2 rounded-md hover:bg-slate-50 hover:text-[#0f2e5f]"
            >
              Kenapa Kami
            </a>
            <a
              href="#alur-kerja"
              onClick={closeMenu}
              className="px-2 py-2 rounded-md hover:bg-slate-50 hover:text-[#0f2e5f]"
            >
              Alur 7 Langkah
            </a>
            <a
              href="#bukti"
              onClick={closeMenu}
              className="px-2 py-2 rounded-md hover:bg-slate-50 hover:text-[#0f2e5f]"
            >
              Bukti
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="px-2 py-2 rounded-md hover:bg-slate-50 hover:text-[#0f2e5f]"
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
