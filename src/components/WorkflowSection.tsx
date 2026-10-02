import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'motion/react';
import { siteContent } from '../content';
import { CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const { title, subtitle, steps } = siteContent.workflow;
  const { trackingLive } = siteContent;
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  // Garis vertikal tengah tergambar mengikuti scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Stepper otomatis (hanya jika trackingLive)
  const trackingSteps = ['Diterima', 'Pemeriksaan Awal', 'Pengerjaan', 'Pemeriksaan Akhir', 'Pengiriman'];
  const [activeStep, setActiveStep] = useState(2);
  useEffect(() => {
    if (!trackingLive) return;
    const id = setInterval(() => setActiveStep((p) => (p + 1) % trackingSteps.length), 2800);
    return () => clearInterval(id);
  }, [trackingLive, trackingSteps.length]);

  return (
    <section id="alur-kerja" ref={containerRef} className="py-16 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header — terpusat */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-6 h-px bg-[#0E6B58]" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Proses Kerja</span>
            <span className="block w-6 h-px bg-[#0E6B58]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Timeline zigzag */}
        <div className="relative">
          {/* Garis vertikal tengah — background (abu-abu) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 hidden lg:block" />

          {/* Garis vertikal tengah — progress (hijau dengan glow) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden lg:block z-0">
            <motion.div
              className="w-full bg-[#16A085] origin-top shadow-[0_0_12px_2px_rgba(22,160,133,0.8)]"
              style={{ scaleY: shouldReduceMotion ? 1 : lineScaleY, height: '100%' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 sm:space-y-20">
            {steps.map((st, idx) => {
              const isLeft = idx % 2 === 0;   // even → konten kiri, angka kanan
              const fromX = isLeft ? -40 : 40;

              return (
                <div key={st.step} className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-0">

                  {/* Kolom kiri */}
                  {isLeft ? (
                    <motion.div
                      className="lg:pr-14 xl:pr-20"
                      initial={shouldReduceMotion ? false : { opacity: 0, x: fromX }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.65, ease }}
                    >
                      <StepCard st={st} idx={idx} trackingLive={trackingLive} activeStep={activeStep} trackingSteps={trackingSteps} />
                    </motion.div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}

                  {/* Node angka di tengah */}
                  <TimelineNode step={st.step} />

                  {/* Kolom kanan */}
                  {!isLeft ? (
                    <motion.div
                      className="lg:pl-14 xl:pl-20"
                      initial={shouldReduceMotion ? false : { opacity: 0, x: fromX }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.65, ease }}
                    >
                      <StepCard st={st} idx={idx} trackingLive={trackingLive} activeStep={activeStep} trackingSteps={trackingSteps} />
                    </motion.div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Sub-component: konten satu langkah ─── */
interface StepCardProps {
  st: { step: number; title: string; description: string; dummy?: boolean };
  idx: number;
  trackingLive: boolean;
  activeStep: number;
  trackingSteps: string[];
}

const StepCard: React.FC<StepCardProps> = ({ st, trackingLive, activeStep, trackingSteps }) => (
  <div className="group">
    <p className="text-[11px] font-bold tracking-widest uppercase text-[#0E6B58] mb-1">
      Langkah {st.step}
    </p>
    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#0E6B58] transition-colors">
      {st.title}
    </h3>
    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
      {st.description}
    </p>

    {st.step === 3 && trackingLive && (
      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold text-slate-700">Simulasi Alur Status Batch</span>
          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Loop Otomatis</span>
        </div>
        <div className="grid grid-cols-5 gap-1 text-center">
          {trackingSteps.map((name, sIdx) => {
            const isCurrent = sIdx === activeStep;
            const isPast = sIdx < activeStep;
            return (
              <div key={sIdx} className="flex flex-col items-center gap-1">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                  isCurrent ? 'bg-[#FFC43D] text-[#0F172A] ring-2 ring-[#FFC43D]/40'
                  : isPast   ? 'bg-[#16A085] text-white'
                             : 'bg-slate-100 text-slate-400'
                }`}>
                  {isPast ? <CheckCircle2 className="w-3.5 h-3.5" /> : sIdx + 1}
                </div>
                <span className={`text-[9px] leading-tight ${isCurrent ? 'font-bold text-[#0E6B58]' : isPast ? 'text-slate-600' : 'text-slate-400'}`}>
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
);

const TimelineNode: React.FC<{ step: number }> = ({ step }) => {
  const ref = useRef(null);
  // Aktif ketika elemen melewati tengah layar (50% dari bawah) dan tetap aktif jika scroll terus ke bawah
  const isActive = useInView(ref, { margin: "10000px 0px -50% 0px" });

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-extrabold shadow-sm z-10 mx-auto lg:mx-0 transition-all duration-500 ease-out ${
        isActive
          ? 'bg-[#16A085] border-[#16A085] text-white shadow-[0_0_15px_rgba(22,160,133,0.5)] scale-110'
          : 'bg-white border-slate-200 text-slate-400 scale-100'
      }`}
    >
      {step}
    </div>
  );
};
