import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { siteContent } from '../content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { title, subtitle, items } = siteContent.faq;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header — terpusat */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-6 h-px bg-[#0E6B58]" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Tanya Jawab (FAQ)</span>
            <span className="block w-6 h-px bg-[#0E6B58]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Bentuk FAQ: Akordeon Polos (Daftar pembatas garis tanpa kartu box) */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left flex items-center justify-between gap-4 py-1 text-slate-900 hover:text-[#0E6B58] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0E6B58]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: easeCurve }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
