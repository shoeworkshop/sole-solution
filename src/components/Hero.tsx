import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { siteContent, createWhatsAppUrl } from '../content';
import { MessageCircle } from 'lucide-react';

const BRANDS = ['EIGER','PVANDA','BRODO','League','NAH PROJECT','VENTELA','PIERO','COMPASS'];
const TICKER_ITEMS = [...BRANDS, ...BRANDS];

export const Hero: React.FC = () => {
  const waUrl = createWhatsAppUrl();
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;


  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#F8FAFC]">
      {/* Foto hero: cover seluruh section, gradient yang mengatur fade-nya */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Desktop */}
        <div
          className="absolute inset-0 z-10 hidden lg:block"
          style={{
            background: 'linear-gradient(108deg, #F8FAFC 38%, #F8FAFCcc 52%, transparent 68%)',
          }}
        />
        {/* Gradient Mobile (vertikal) */}
        <div
          className="absolute inset-0 z-10 lg:hidden"
          style={{
            background: 'linear-gradient(to bottom, #F8FAFC 45%, #F8FAFCdd 65%, transparent 100%)',
          }}
        />
        <img
          src="/hero.png"
          alt="Workshop reparasi sepatu Sole Solution"
          className="w-full h-full object-cover object-center opacity-60 lg:opacity-100"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 min-h-[540px] sm:min-h-[600px]">

          {/* ── Kolom Kiri ── */}
          <div className="flex flex-col justify-center py-14 sm:py-20 pr-0 lg:pr-16">

            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeCurve }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="block w-8 h-px bg-[#0f2e5f]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-500">
                {siteContent.hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0, ease: easeCurve }}
                >
                  Partner reparasi sepatu
                </motion.span>
              </span>

              {/* Line 2 — "brand Anda" hijau + italic */}
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: easeCurve }}
                >
                  untuk{' '}
                  <span className="italic text-[#0f2e5f]">brand Anda.</span>
                </motion.span>
              </span>
            </h1>

            {/* Sub-headline */}
            <motion.p
              className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mb-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: easeCurve }}
            >
              {siteContent.hero.singleSentence}
            </motion.p>

            {/* CTA Button — dark green like screenshot */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: easeCurve }}
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 text-sm sm:text-base font-bold rounded-lg bg-[#0f2e5f] text-white hover:bg-[#0b132b] active:scale-[0.98] transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>{siteContent.hero.ctaButtonText}</span>
                <span className="text-white/60">→</span>
              </a>
            </motion.div>


          </div>

        </div>
      </div>

    </section>
  );
};
