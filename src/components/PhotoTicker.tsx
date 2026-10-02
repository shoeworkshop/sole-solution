import React from 'react';

const PROJECT_PHOTOS = [
  { id: 1, caption: 'LEM JAHIT', image: '/LEM JAHIT.png' },
  { id: 2, caption: 'LEM JAHIT (BONGPAS)', image: '/LEM JAHIT (BONGPAS).png' },
  { id: 3, caption: 'LEM PRESS (BONGPAS)', image: '/LEM PRESS (BONGPAS).png' },
  { id: 4, caption: 'LEM SPESIAL (LAPIS KULIT)', image: '/LEM-SPESIAL-LAPIS-KULIT.png' },
  { id: 5, caption: 'LEM JAHIT 2 LAYER', image: '/LEM JAHIT TWO LAYER.png' },
];

const TICKER_ITEMS = [...PROJECT_PHOTOS, ...PROJECT_PHOTOS];

export const PhotoTicker: React.FC = () => {
  return (
    <div className="bg-[#0E2F23] py-5 overflow-hidden select-none border-b border-[#051d15]">
      <div className="flex items-center">
        {/* Label kiri */}
        <div className="shrink-0 px-6 sm:px-10 text-[10px] font-semibold tracking-widest uppercase text-white/40 whitespace-nowrap border-r border-white/10 mr-6 leading-tight">
          Sepatu yang pernah<br />kami kerjakan
        </div>

        {/* Scrolling track */}
        <div className="relative flex-1 overflow-hidden">
          {/* Fade kiri */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0E2F23] to-transparent z-10 pointer-events-none" />
          {/* Fade kanan */}
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0E2F23] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-4 ticker-track-photo" aria-hidden="true">
            {TICKER_ITEMS.map((item, i) => (
              <div key={i} className="shrink-0 w-52 sm:w-60 bg-[#092219] rounded-xl overflow-hidden border border-white/5 relative group">
                {/* Foto Hasil Kerja */}
                <div className="w-full aspect-[4/3] bg-slate-900 overflow-hidden relative">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.caption} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                      <span className="text-xs font-mono border border-slate-600 px-3 py-1 rounded">Foto {item.id}</span>
                    </div>
                  )}
                </div>
                
                {/* Caption */}
                <div className="p-3 text-[11px] text-white/60 font-medium leading-tight group-hover:text-white transition-colors bg-[#092219]">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
