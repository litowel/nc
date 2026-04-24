import React from 'react';

export default function Logo({ className = "w-8 h-8", animate = true }: { className?: string, animate?: boolean }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="nexus-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
        </linearGradient>
        <linearGradient id="nexus-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" /> {/* Emerald */}
          <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
        </linearGradient>
        <linearGradient id="nexus-grad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c084fc" /> {/* Purple */}
          <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
        </linearGradient>
        <filter id="nexus-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="nexus-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
          <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Static Outer Aura */}
      <circle cx="50" cy="50" r="48" stroke="url(#nexus-grad3)" strokeWidth="0.5" opacity="0.3" filter="url(#nexus-glow)" />

      {/* Outer Rotating Ring */}
      <g>
        <circle cx="50" cy="50" r="44" stroke="url(#nexus-grad1)" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.8" />
        {animate && <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="24s" repeatCount="indefinite" />}
      </g>

      {/* Inner Counter-Rotating Ring */}
      <g>
        <circle cx="50" cy="50" r="38" stroke="url(#nexus-grad2)" strokeWidth="1" strokeDasharray="15 5" opacity="0.6" />
        {animate && <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="18s" repeatCount="indefinite" />}
      </g>

      {/* Complex Star/Geometry Base */}
      <g filter="url(#nexus-glow)">
        <polygon points="50,12 83,31 83,69 50,88 17,69 17,31" stroke="url(#nexus-grad1)" strokeWidth="1.5" fill="none" opacity="0.9" />
        <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" stroke="url(#nexus-grad3)" strokeWidth="1" fill="none" opacity="0.7" />
        {/* Overlapping inverted triangle to form subtle hexagram lines */}
        <polygon points="50,25 78,70 22,70" stroke="url(#nexus-grad2)" strokeWidth="0.75" fill="none" opacity="0.6" />
        <polygon points="50,75 78,30 22,30" stroke="url(#nexus-grad2)" strokeWidth="0.75" fill="none" opacity="0.6" />
      </g>

      {/* Energy Beams Connecting Nodes */}
      <g opacity="0.3">
        <line x1="50" y1="12" x2="50" y2="88" stroke="url(#nexus-grad1)" strokeWidth="0.5" />
        <line x1="17" y1="31" x2="83" y2="69" stroke="url(#nexus-grad1)" strokeWidth="0.5" />
        <line x1="17" y1="69" x2="83" y2="31" stroke="url(#nexus-grad1)" strokeWidth="0.5" />
      </g>

      {/* Pulsing Core */}
      <g filter="url(#nexus-glow)">
        <circle cx="50" cy="50" r="14" fill="url(#nexus-core)">
          {animate && <animate attributeName="r" values="12;15;12" dur="4s" repeatCount="indefinite" />}
          {animate && <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />}
        </circle>
        <circle cx="50" cy="50" r="4" fill="#ffffff" />
      </g>
      
    </svg>
  );
}
