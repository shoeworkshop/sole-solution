import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { siteContent, createWhatsAppUrl } from '../content';
import { Check, MessageCircle, X, ChevronRight, ClipboardList, ShieldCheck, FileText, Clock, Grid, Activity, MapPin } from 'lucide-react';

const icons = [ClipboardList, ShieldCheck, FileText, Clock, Grid, Activity];

export const ComparisonSection: React.FC = () => {
  const { title, subtitle, foundingFact, rows } = siteContent.comparison;
  const shouldReduceMotion = useReducedMotion();
  const waUrl = createWhatsAppUrl();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const activeRow = activeIndex !== null ? rows[activeIndex] : rows[0];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} id="kenapa-kami-tabel" className="pt-16 sm:pt-24 pb-16 sm:pb-24 bg-[#0f172a] relative z-10 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-6 h-px bg-white/30" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">
              Kenapa Sole Solution
            </span>
            <span className="block w-6 h-px bg-white/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-4 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Interactive Layout: Tabs on Left, Stacked Cards on Right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left: Features List (Tabs) */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 flex flex-col gap-2 relative z-20"
          >
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 text-white/80" />
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-white/60 uppercase tracking-widest leading-tight">
                Sole Solution, Bandung<br/>Sejak 2017
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-[2rem] border border-white/15">
              {rows.map((row, idx) => {
                const isActive = activeIndex === idx;
                const Icon = icons[idx % icons.length];
                return (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => setActiveIndex(isActive ? null : idx)}
                      className={`group w-full text-left px-5 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 ${isActive ? 'bg-white/15 text-white shadow-md' : 'text-white/50 hover:bg-white/5'}`}
                    >
                      <div className="relative shrink-0 flex items-center justify-center w-8 h-8 bg-black/20 rounded-lg">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFC43D]' : 'text-white/40'}`} />
                      </div>
                      <span className={`text-sm sm:text-base font-bold flex-1 ${isActive ? 'text-[#FFC43D]' : 'text-white/70'}`}>
                        {row.feature}
                      </span>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-[#FFC43D] rotate-90 lg:translate-x-1 lg:rotate-0' : 'text-white/20 group-hover:text-white/40'}`} />
                    </button>
                    
                    {/* Mobile Accordion Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="lg:hidden overflow-hidden"
                        >
                          <div className="pt-3 pb-5 px-3 flex flex-col gap-3">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-3 text-white/50">
                                <X className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Metode Lain</span>
                              </div>
                              <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex flex-col gap-1">
                                  <span className="text-[10px] font-bold text-white/50 uppercase">Reparasi Umum</span>
                                  <span className="text-white font-medium text-sm leading-snug">{row.generalRepair}</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                  <span className="text-[10px] font-bold text-white/50 uppercase">Tim Internal</span>
                                  <span className="text-white font-medium text-sm leading-snug">{row.inHouse}</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="bg-white rounded-xl p-4 shadow-lg">
                              <div className="flex items-center gap-2 mb-2 text-[#0f2e5f]">
                                <div className="w-5 h-5 rounded-full bg-[#0f2e5f] flex items-center justify-center shrink-0">
                                  <Check className="w-3 h-3 stroke-[3] text-white" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f2e5f]">Sole Solution</span>
                              </div>
                              <p className="text-sm font-extrabold text-slate-900 leading-snug">
                                {row.soleSolution}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Stacked Cards Display (Desktop Only) */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-full lg:w-7/12 relative mt-4 lg:mt-0"
          >
            <AnimatePresence mode="wait">
              {activeIndex !== null && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-xl mx-auto lg:mr-0 grid grid-cols-1 pt-2 sm:pt-6"
                >
                
                {/* Background Card (Metode Lama) */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="col-start-1 row-start-1 w-[95%] lg:w-[90%] mx-auto lg:mx-0 bg-white/10 backdrop-blur-sm border border-white/15 rounded-[2rem] p-8 pb-40 sm:pb-48 z-0 self-start text-left"
                >
                  <div className="flex items-center gap-2 mb-8 text-white/50">
                    <X className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Metode Lain</span>
                  </div>
                  <ul className="space-y-6 text-sm text-white/80">
                    <li className="flex flex-col gap-1.5">
                      <span className="text-[10px] sm:text-xs font-bold text-white/50 uppercase">Reparasi Umum</span>
                      <span className="text-white font-medium text-base">{activeRow.generalRepair}</span>
                    </li>
                    <li className="flex flex-col gap-1.5">
                      <span className="text-[10px] sm:text-xs font-bold text-white/50 uppercase">Tim Internal</span>
                      <span className="text-white font-medium text-base">{activeRow.inHouse}</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Foreground Card (Sole Solution) */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, type: "spring", bounce: 0.4 }}
                  className="col-start-1 row-start-1 w-full sm:w-[85%] bg-white rounded-3xl p-6 sm:p-7 shadow-2xl z-10 self-end justify-self-center lg:justify-self-end mt-32 sm:mt-36 lg:mt-40 lg:-mr-4"
                >
                  <div className="flex items-center gap-3 mb-3 text-[#0f2e5f]">
                    <div className="w-6 h-6 rounded-full bg-[#0f2e5f] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 stroke-[3] text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0f2e5f]">Sole Solution</span>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 leading-snug">
                    {activeRow.soleSolution}
                  </p>
                </motion.div>
                
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};
