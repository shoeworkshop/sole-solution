import React from 'react';

const BRANDS = ['EIGER', 'PVANDA', 'BRODO', 'League', 'NAH PROJECT', 'VENTELA', 'PIERO', 'COMPASS'];
const TICKER_ITEMS = [...BRANDS, ...BRANDS];

export const BrandTicker: React.FC = () => {
  return (
    <div className="bg-[#0b132b] py-4 overflow-hidden select-none">
      <div className="flex items-center">
        {/* Label kiri */}
        <div className="shrink-0 px-6 sm:px-10 text-[10px] font-semibold tracking-widest uppercase text-white/40 whitespace-nowrap border-r border-white/10 mr-6 leading-tight">
          Dipercaya oleh<br />Brand Footwear Indonesia
        </div>

        {/* Scrolling track */}
        <div className="relative flex-1 overflow-hidden">
          {/* Fade kiri */}
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0b132b] to-transparent z-10 pointer-events-none" />
          {/* Fade kanan */}
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0b132b] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center ticker-track">
            {TICKER_ITEMS.map((brand, i) => (
              <span
                key={i}
                className="shrink-0 px-8 text-sm tracking-wide text-white/60 hover:text-white/90 transition-colors whitespace-nowrap"
                style={{
                  fontWeight: ['BRODO', 'EIGER', 'VENTELA'].includes(brand) ? 900 : 600,
                  fontStyle: brand === 'League' ? 'italic' : 'normal',
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
