import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { siteContent } from '../content';
import { DummyBadge } from './DummyBadge';
import { Camera, Quote, ArrowLeft, ArrowRight, Building2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const PhotoCarousel: React.FC<{ images: string[]; title: string; caption: string; onImageClick?: (url: string) => void }> = ({ images, title, caption, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full h-full group/carousel cursor-pointer"
      onClick={() => onImageClick?.(images[currentIndex])}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out group-hover:scale-105 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        />
      ))}
      
      {images.length > 1 && (
        <div className="absolute top-4 left-4 flex gap-1.5 z-10 pointer-events-none">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${
                idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent flex flex-col justify-end p-5 text-left pointer-events-none z-10">
        <span className="text-sm font-bold text-white block drop-shadow-md">{title}</span>
        <span className="text-[11px] text-white/80 mt-0.5 drop-shadow">{caption}</span>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-black/40 z-20"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 -ml-0.5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-black/40 z-20"
            aria-label="Foto selanjutnya"
          >
            <ChevronRight className="w-5 h-5 -mr-0.5" />
          </button>
        </>
      )}
    </div>
  );
};

interface EvidenceSectionProps {
  forceEmpty?: boolean;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ forceEmpty = false }) => {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.22, 1, 0.36, 1] as const;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { title, subtitle, partnerLogos, photos, testimonials } = siteContent.evidence;

  // Toggle antara testimoni untuk "SATU kutipan besar bergantian"
  const [activeTestiIndex, setActiveTestiIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveTestiIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds for testimonials to give time to read
    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const currentTesti = testimonials?.[activeTestiIndex];

  const logos = forceEmpty ? [] : partnerLogos;
  const photoList = forceEmpty ? [] : photos;

  const hasData = logos.length > 0 || photoList.length > 0 || !!currentTesti;
  if (!hasData) return null;

  return (
    <section id="bukti" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header — terpusat */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-6 h-px bg-[#0f2e5f]" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Galeri & Testimoni</span>
            <span className="block w-6 h-px bg-[#0f2e5f]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* 1. Kolase Foto Asimetris (Aspek Bervariasi: 16:9, 1:1, 4:3) */}
        {photoList.length > 0 && (
          <div className="mb-16">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 md:grid md:grid-cols-12 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 md:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {photoList.map((photo) => (
                <div
                  key={photo.id}
                  className={`shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center ${photo.colSpanClass} ${photo.aspectClass} rounded-2xl overflow-hidden border border-slate-200/80 relative group bg-slate-100 flex flex-col items-center justify-center text-center select-none shadow-sm hover:shadow-md transition-shadow`}
                >
                    {photo.images && photo.images.length > 0 ? (
                      <PhotoCarousel images={photo.images} title={photo.title} caption={photo.caption} onImageClick={setSelectedImage} />
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-white/90 text-slate-500 flex items-center justify-center mb-2 shadow-2xs">
                          <Camera className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                          {photo.title}
                        </span>
                        <span className="text-[11px] text-slate-500 mt-0.5">
                          {photo.caption}
                        </span>
                      </>
                    )}
                    
                    <div className="absolute top-3 right-3 z-10">
                      {photo.dummy && <DummyBadge show={true} />}
                    </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. SATU Kutipan Besar Bergantian (Carousel) */}
        {currentTesti && (
          <div className="mb-16 bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 relative overflow-hidden group/testi flex items-center justify-center">
            
            <div className="w-full max-w-4xl mx-auto relative px-0 sm:px-16 min-h-[220px] flex flex-col justify-center">
              
              {/* Arrows - Left & Right (Desktop Only) */}
              {testimonials.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveTestiIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="hidden lg:flex absolute -left-6 xl:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all opacity-0 group-hover/testi:opacity-100 z-10"
                    aria-label="Kutipan sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5 -ml-0.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTestiIndex((prev) => (prev + 1) % testimonials.length)}
                    className="hidden lg:flex absolute -right-6 xl:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all opacity-0 group-hover/testi:opacity-100 z-10"
                    aria-label="Kutipan berikutnya"
                  >
                    <ChevronRight className="w-5 h-5 -mr-0.5" />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestiIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-8 h-8 text-[#1d4ed8]/40 mb-6" />
                  
                  {/* Kutipan besar dominan */}
                  <blockquote className="text-base sm:text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed sm:leading-snug tracking-tight mb-8">
                    "{currentTesti.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {currentTesti.role}
                        </div>
                        <div className="text-xs text-[#0f2e5f] font-medium">
                          {currentTesti.companyType}
                        </div>
                      </div>
                      {currentTesti.dummy && <DummyBadge show={true} />}
                    </div>

                    {/* Dots Indicator */}
                    {testimonials.length > 1 && (
                      <div className="flex items-center gap-1.5">
                        {testimonials.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeTestiIndex ? 'w-4 bg-[#0f2e5f]' : 'w-1.5 bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* 3. Slot Logo Partner */}
        {logos.length > 0 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Slot Placeholder Mitra Brand (Kerahasiaan NDA)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {logos.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center group hover:bg-white hover:border-slate-300 transition-all"
                >
                  <Building2 className="w-4 h-4 text-slate-400 mb-1.5" />
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                    <span>{partner.label}</span>
                    {partner.dummy && <DummyBadge show={true} />}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Popup Foto */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Detail Pekerjaan"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
