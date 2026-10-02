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
        className="w-full bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 relative overflow-hidden"
      >
        {/* Angka 01/02/03 Raksasa di latar belakang/sudut panel */}
        <div className="absolute top-4 right-6 sm:top-6 sm:right-10 text-7xl sm:text-9xl font-black tracking-tighter text-slate-200/80 select-none pointer-events-none">
          {program.number}
        </div>

        <div className="relative z-10 max-w-3xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            {program.title}
          </h3>

          <p className="text-sm sm:text-base font-semibold text-[#0E6B58] mb-4">
            {program.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
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
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200/60"
                >
                  <Check className="w-4 h-4 text-[#16A085] shrink-0 mt-0.5" />
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#FFC43D] text-[#0F172A] hover:bg-[#ffbe26] transition-colors shadow-2xs"
            >
              <span>Konsultasikan Kebutuhan Ini</span>
              <ArrowRight className="w-4 h-4" />
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
        {/* Section Header (Tanpa eyebrow, tanpa tag mono) */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
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
