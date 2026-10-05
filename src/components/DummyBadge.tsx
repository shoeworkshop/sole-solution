import React from 'react';

interface DummyBadgeProps {
  show?: boolean;
  className?: string;
}

export const DummyBadge: React.FC<DummyBadgeProps> = ({ show = true, className = '' }) => {
  if (!show) return null;

  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-100/90 text-amber-900 border border-blue-300 rounded ${className}`}
      title="Data placeholder / belum terverifikasi"
    >
      DUMMY
    </span>
  );
};
