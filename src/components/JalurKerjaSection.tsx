import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { jalurB2B, createWhatsAppUrl } from '../content';
import { MessageCircle } from 'lucide-react';

export const JalurKerjaSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const waUrl = createWhatsAppUrl();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 30%"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -180]);

  return (
    <section ref={sectionRef} id="kenapa-kami-jalur" className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#0f172a] relative z-20">
      <motion.div style={{ y }} className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 -mb-[120px] sm:-mb-[180px]">
        
        {/* Timeline Image Area */}
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-black shadow-2xl mb-8">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            {!(jalurB2B.dummy || !jalurB2B.photo) && (
              <img 
                src={jalurB2B.photo} 
                alt={jalurB2B.alt} 
                className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a3b] via-[#0b1a3b]/60 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-12 sm:py-16">
            
            {/* Title */}
            <h3 className="text-xs sm:text-sm font-bold text-blue-400 tracking-[0.2em] uppercase mb-12 sm:mb-16 text-center">
              Lihat Sendiri Kualitas Kerjanya
            </h3>

            {/* Timeline Grid */}
            <div className="w-full relative">
              {/* Horizontal Line connecting nodes (Desktop only) */}
              <div className="hidden md:block absolute top-1.5 left-1.5 right-1.5 h-px bg-blue-500/30" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
                {jalurB2B.spots.map((spot, idx) => (
                  <motion.div 
                    key={spot.id} 
                    className="relative flex flex-col"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {/* Node (Dot) */}
                    <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)] ring-4 ring-[#0f172a] mb-8 mx-auto md:mx-0 relative z-10" />

                    {/* Text content */}
                    <div className="text-center md:text-left mb-6 flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2">{spot.label}</h4>
                      <p className="text-sm text-blue-100/70 leading-relaxed">{spot.text}</p>
                    </div>

                    {/* Image */}
                    {spot.image && (
                      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg mt-auto">
                        <img src={spot.image} alt={spot.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold rounded-xl bg-[#5EB6FB] text-[#0F172A] hover:bg-[#4BA8F0] active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Konsultasi Sekarang</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
};
