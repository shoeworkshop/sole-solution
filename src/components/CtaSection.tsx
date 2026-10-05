import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { siteContent, createWhatsAppUrl } from '../content';
import { MessageCircle, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const { title, description, buttonText, note } = siteContent.cta;
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  // Optional customizer values for the prefilled message
  const [brandName, setBrandName] = useState('');
  const [volume, setVolume] = useState('');
  const [issueType, setIssueType] = useState('');
  const [copied, setCopied] = useState(false);

  const customWaUrl = createWhatsAppUrl({
    brandName: brandName || '[Nama Brand Anda]',
    volume: volume || '[Estimasi Pasang / Bulan]',
    issues: issueType || '[Jenis Kerusakan Sol / Jahitan / Cacat]',
  });

  const previewMessage = `Halo Tim Sole Solution,

Saya ingin konsultasi reparasi B2B untuk brand kami:
- Nama Brand: ${brandName || '[Nama Brand Anda]'}
- Estimasi Volume per Bulan: ${volume || '[Estimasi Pasang / Bulan]'}
- Jenis Kerusakan / Kebutuhan: ${issueType || '[Jenis Kerusakan Sol / Jahitan / Cacat]'}

Mohon informasi alur kerja sama. Terima kasih!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(previewMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header — terpusat */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-6 h-px bg-white/30" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Hubungi Kami</span>
            <span className="block w-6 h-px bg-white/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-blue-100/80 mt-3 leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeCurve }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Kolom Kiri: WhatsApp Action */}
          <div className="lg:col-span-7">


            {/* Input nama brand cepat untuk template WhatsApp */}
            <div className="bg-white/10 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-white/15 mb-6 space-y-4">
              <div className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                Opsional: Isi Singkat Data Brand
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama Brand Anda"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-white/95 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5EB6FB] transition-shadow shadow-inner"
                />
                <input
                  type="text"
                  placeholder="Est. Volume (cth. 20–30 pasang/bln)"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-white/95 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5EB6FB] transition-shadow shadow-inner"
                />
              </div>
              <textarea
                placeholder="Jenis Kerusakan / Kebutuhan (cth. Sol lepas, jahitan putus, rework cacat pabrik...)"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/95 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5EB6FB] transition-shadow shadow-inner resize-none"
              />
            </div>

            {/* Tombol Utama WA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={customWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm sm:text-base font-bold rounded-lg bg-[#5EB6FB] text-[#0F172A] hover:bg-[#4BA8F0] active:scale-[0.98] transition-all shadow-md whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>{buttonText}</span>
              </a>

              <span className="text-xs text-blue-100/80 leading-snug">
                {note}
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Preview Chat Bubble */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b132b] rounded-2xl border border-[#1d4ed8]/30 p-5 shadow-lg relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">
                    Format Pesan WhatsApp
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors"
                  title="Salin teks pesan"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-blue-400" />
                      <span className="text-blue-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Chat Bubble Presentation */}
              <div className="bg-[#1e293b] text-slate-100 p-4 rounded-xl rounded-tr-none text-xs font-mono leading-relaxed border border-[#1d4ed8]/30 whitespace-pre-line shadow-xs">
                {previewMessage}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-blue-200/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Langsung terkirim ke tim spesialis B2B Sole Solution</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
