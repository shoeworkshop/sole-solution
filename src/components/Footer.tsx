import React from 'react';
import { siteContent, createWhatsAppUrl } from '../content';
import { SoleLogo } from './SoleLogo';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const waUrl = createWhatsAppUrl();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-slate-800">
          
          {/* Kolom 1: Brand & Info (Span 4) */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <SoleLogo size="md" showSubtitle={true} theme="dark" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-3">
              {siteContent.footer.workshopNotice}
            </p>
            <div className="text-[11px] text-emerald-400 font-medium">
              {siteContent.brand.foundingFact}
            </div>
          </div>

          {/* Kolom 2: Kontak Kami (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-3.5 text-xs text-slate-300">
            <h3 className="font-semibold text-white text-sm mb-1">Hubungi Kami</h3>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
              <span className="leading-relaxed">Jalan Kembar 1 No 41 Cigereleng Regol<br />Kota Bandung Jawa Barat 40253</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 shrink-0 text-emerald-500" />
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">
                +62 851-6812-5219
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-emerald-500" />
              <a href="mailto:info.shoeworkshop@gmail.com" className="hover:text-white transition-colors">info.shoeworkshop@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 shrink-0 text-emerald-500" />
              <span>Senin - Minggu: 09.00 - 17.00 WIB</span>
            </div>
          </div>

          {/* Kolom 3: Navigasi (Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-3 text-xs font-medium text-slate-300">
            <h3 className="font-semibold text-white text-sm mb-1">Navigasi</h3>
            <a href="#kenapa-kami" className="hover:text-white transition-colors">Kenapa Kami</a>
            <a href="#program" className="hover:text-white transition-colors">Tiga Program</a>
            <a href="#alur-kerja" className="hover:text-white transition-colors">Alur 7 Langkah</a>
            <a href="#standar" className="hover:text-white transition-colors">Standar</a>
            <a href="#bukti" className="hover:text-white transition-colors">Dokumentasi</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>

        <div className="pt-8 flex items-center justify-center text-xs text-slate-500 text-center">
          <span>{siteContent.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
};
