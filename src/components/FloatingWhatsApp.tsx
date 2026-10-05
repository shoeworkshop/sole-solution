import React from 'react';
import { createWhatsAppUrl } from '../content';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = createWhatsAppUrl();

  // Hanya tampil di mobile (md:hidden) sesuai aturan REVISI 2
  return (
    <div className="fixed bottom-5 right-5 z-40 block md:hidden">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#5EB6FB] text-[#0F172A] font-bold text-xs shadow-lg active:scale-95 transition-all border border-blue-300"
        aria-label="Hubungi WhatsApp B2B"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>Konsultasi B2B</span>
      </a>
    </div>
  );
};
