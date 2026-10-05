import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'motion/react';
import { siteContent, createWhatsAppUrl, ProgramItem } from '../content';
import { ArrowRight, Check } from 'lucide-react';

interface ProgramPanelProps {
  program: ProgramItem;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  shouldReduceMotion: boolean | null;
}

const ProgramPanel: React.FC<ProgramPanelProps> = ({
  program,
  index,
  progress,
  range,
  targetScale,
  shouldReduceMotion,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  const programWaUrl = createWhatsAppUrl({
    issues: `Konsultasi ${program.title}`,
  });

  const topOffset = `${72 + index * 20}px`;

  return (
    <div
      style={{ top: topOffset }}
      className="sticky mb-12 w-full"
    >
      <motion.div
        style={{
          scale: shouldReduceMotion ? 1 : scale,
          transformOrigin: 'top center',
        }}
        className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 relative overflow-hidden"
      >
        {/* Subtle diagonal background gradient like screenshot */}
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-slate-100/70 via-blue-50/30 to-transparent pointer-events-none" />

        {/* Angka 01/02/03 Raksasa di sudut panel */}
        <div className="absolute top-4 right-6 sm:top-6 sm:right-10 text-8xl sm:text-[130px] font-black tracking-tighter text-slate-200/70 select-none pointer-events-none leading-none">
          {program.number}
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Top Blue Accent Bar */}
          <div className="w-10 h-1.5 rounded-full bg-[#1d4ed8] mb-6" />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            {program.title}
          </h3>

          <p className="text-sm sm:text-base font-bold text-slate-800 mb-4">
            {program.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 max-w-2xl">
            {program.description}
          </p>

          {/* Apa yang dikerjakan */}
          <div className="mb-8">
            <span className="text-xs font-bold text-slate-700 block mb-3 uppercase tracking-wider">
              Pekerjaan yang Ditangani:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {program.items.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100/80 text-[#2563eb] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <a
              href={programWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#5EB6FB] text-[#0f2e5f] hover:bg-[#4BA8F0] active:scale-[0.98] transition-all shadow-sm shadow-sky-200/50"
            >
              <span>Konsultasikan Kebutuhan Ini</span>
              <ArrowRight className="w-4 h-4 text-[#0f2e5f]" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProgramsSection: React.FC = () => {
  const { title, subtitle, items } = siteContent.programs;
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="program" ref={containerRef} className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header — terpusat */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-6 h-px bg-[#0f2e5f]" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Pilihan Program</span>
            <span className="block w-6 h-px bg-[#0f2e5f]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Panel besar full-width bertumpuk (sticky) dengan angka raksasa */}
        <div className="relative pb-10">
          {items.map((prog, idx) => {
            const targetScale = 1 - (items.length - idx) * 0.04;
            const startRange = idx * 0.3;
            const endRange = 1;

            return (
              <ProgramPanel
                key={prog.id}
                program={prog}
                index={idx}
                progress={scrollYProgress}
                range={[startRange, endRange]}
                targetScale={targetScale}
                shouldReduceMotion={shouldReduceMotion}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
