import React from 'react';

interface SoleLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  monochrome?: boolean;
  theme?: 'light' | 'dark'; // 'light' is dark text on light bg; 'dark' is crisp light text on dark bg (e.g. footer)
}

export const SoleLogo: React.FC<SoleLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
  monochrome = false,
  theme = 'light',
}) => {
  const heightSizes = {
    sm: 'h-6',
    md: 'h-8 sm:h-10',
    lg: 'h-10 sm:h-12',
  };

  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Sole Solution Logo" 
        className={`${heightSizes[size]} w-auto object-contain ${theme === 'dark' ? 'brightness-0 invert opacity-90' : ''}`} 
      />
    </div>
  );
};
