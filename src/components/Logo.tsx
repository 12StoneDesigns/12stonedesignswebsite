import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      
      {/* Background hexagon */}
      <path 
        d="M16 2L28 9V23L16 30L4 23V9L16 2Z" 
        fill="transparent" 
        stroke="currentColor" 
        strokeWidth="1.5"
        filter="url(#glow)"
      />
      
      {/* AH monogram */}
      <path 
        d="M11 8L14 24M14 16H18M18 8L21 24" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      
      {/* Decorative circuit lines */}
      <path 
        d="M8 12L6 14M24 12L26 14M8 20L6 18M24 20L26 18" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};

export default Logo;
