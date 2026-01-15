export const CatCameraIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="stripes-blue" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#3b82f6" strokeWidth="4" />
      </pattern>
    </defs>
    
    <ellipse cx="60" cy="100" rx="30" ry="5" fill="#000" opacity="0.1" />
    
    <ellipse cx="60" cy="68" rx="22" ry="26" fill="#60a5fa" />
    <ellipse cx="60" cy="68" rx="22" ry="26" fill="url(#stripes-blue)" opacity="0.3" />
    
    <path d="M 43 52 L 38 42 L 43 48 Z" fill="#60a5fa" />
    <path d="M 77 52 L 82 42 L 77 48 Z" fill="#60a5fa" />
    
    <ellipse cx="60" cy="55" rx="20" ry="18" fill="#60a5fa" />
    <ellipse cx="60" cy="55" rx="20" ry="18" fill="url(#stripes-blue)" opacity="0.3" />
    
    <circle cx="52" cy="53" r="2.5" fill="#1e3a8a" />
    <circle cx="68" cy="53" r="2.5" fill="#1e3a8a" />
    <circle cx="53" cy="52" r="0.8" fill="#fff" />
    <circle cx="69" cy="52" r="0.8" fill="#fff" />
    
    <ellipse cx="60" cy="61" rx="1.5" ry="2" fill="#ec4899" />
    
    <path d="M 56 64 Q 60 65 64 64" stroke="#1e3a8a" strokeWidth="1" fill="none" opacity="0.4" />
    
    <g className="animate-bounce" style={{ animationDuration: '2.5s' }}>
      <rect x="50" y="76" width="20" height="16" rx="2" fill="#1e3a8a" />
      <circle cx="60" cy="84" r="5" fill="#3b82f6" />
      <circle cx="61" cy="83" r="1.5" fill="#fff" opacity="0.7" />
    </g>
  </svg>
);

export const CatDoctorIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="stripes-orange" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#ea580c" strokeWidth="4" />
      </pattern>
    </defs>
    
    <ellipse cx="60" cy="100" rx="30" ry="5" fill="#000" opacity="0.1" />
    
    <ellipse cx="60" cy="70" rx="20" ry="24" fill="#fb923c" />
    <ellipse cx="60" cy="70" rx="20" ry="24" fill="url(#stripes-orange)" opacity="0.4" />
    
    <path d="M 44 56 L 40 46 L 44 52 Z" fill="#fb923c" />
    <path d="M 76 56 L 80 46 L 76 52 Z" fill="#fb923c" />
    
    <ellipse cx="60" cy="57" rx="18" ry="16" fill="#fb923c" />
    <ellipse cx="60" cy="57" rx="18" ry="16" fill="url(#stripes-orange)" opacity="0.4" />
    
    <circle cx="53" cy="55" r="2" fill="#7c2d12" />
    <circle cx="67" cy="55" r="2" fill="#7c2d12" />
    
    <ellipse cx="60" cy="63" rx="1.5" ry="2" fill="#dc2626" />
    
    <path d="M 56 66 Q 60 67 64 66" stroke="#7c2d12" strokeWidth="1" fill="none" opacity="0.4" />
    
    <circle cx="46" cy="75" r="3.5" fill="#fb923c" />
    <circle cx="46" cy="75" r="3.5" fill="url(#stripes-orange)" opacity="0.4" />
    
    <g className="animate-pulse" style={{ animationDuration: '2s' }}>
      <rect x="53" y="44" width="14" height="10" rx="1.5" fill="#fff" />
      <path d="M 60 47 L 60 52 M 57.5 49.5 L 62.5 49.5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export const CatPlayIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="stripes-purple" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#8b5cf6" strokeWidth="4" />
      </pattern>
    </defs>
    
    <ellipse cx="60" cy="100" rx="30" ry="5" fill="#000" opacity="0.1" />
    
    <ellipse cx="60" cy="68" rx="20" ry="24" fill="#a78bfa" />
    <ellipse cx="60" cy="68" rx="20" ry="24" fill="url(#stripes-purple)" opacity="0.3" />
    
    <path d="M 44 54 L 40 44 L 44 50 Z" fill="#a78bfa" />
    <path d="M 76 54 L 80 44 L 76 50 Z" fill="#a78bfa" />
    
    <ellipse cx="60" cy="55" rx="18" ry="16" fill="#a78bfa" />
    <ellipse cx="60" cy="55" rx="18" ry="16" fill="url(#stripes-purple)" opacity="0.3" />
    
    <circle cx="53" cy="54" r="3" fill="#1e1b4b" />
    <circle cx="67" cy="54" r="3" fill="#1e1b4b" />
    <circle cx="54" cy="53" r="1" fill="#fff" />
    <circle cx="68" cy="53" r="1" fill="#fff" />
    
    <ellipse cx="60" cy="62" rx="1.5" ry="2" fill="#ec4899" />
    
    <path d="M 56 65 Q 60 66 64 65" stroke="#1e1b4b" strokeWidth="1" fill="none" opacity="0.4" />
    
    <g className="animate-bounce" style={{ animationDuration: '1.5s' }}>
      <circle cx="38" cy="62" r="6" fill="#fbbf24" />
      <path d="M 35 59 L 41 65 M 41 59 L 35 65" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    
    <circle cx="83" cy="70" r="4" fill="#a78bfa" />
    <circle cx="83" cy="70" r="4" fill="url(#stripes-purple)" opacity="0.3" />
  </svg>
);

export const CatSpaIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="stripes-pink" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#db2777" strokeWidth="4" />
      </pattern>
    </defs>
    
    <ellipse cx="60" cy="100" rx="30" ry="5" fill="#000" opacity="0.1" />
    
    <ellipse cx="60" cy="70" rx="22" ry="26" fill="#ec4899" />
    <ellipse cx="60" cy="70" rx="22" ry="26" fill="url(#stripes-pink)" opacity="0.3" />
    
    <path d="M 42 54 L 38 44 L 42 50 Z" fill="#ec4899" />
    <path d="M 78 54 L 82 44 L 78 50 Z" fill="#ec4899" />
    
    <ellipse cx="60" cy="56" rx="20" ry="18" fill="#ec4899" />
    <ellipse cx="60" cy="56" rx="20" ry="18" fill="url(#stripes-pink)" opacity="0.3" />
    
    <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
      <path d="M 48 54 Q 51 50 54 54" fill="none" stroke="#9f1239" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 66 54 Q 69 50 72 54" fill="none" stroke="#9f1239" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    
    <ellipse cx="60" cy="64" rx="1.5" ry="2" fill="#9f1239" />
    
    <path d="M 56 68 Q 60 69 64 68" stroke="#9f1239" strokeWidth="1" fill="none" opacity="0.4" />
    
    <rect x="73" y="62" width="12" height="16" rx="2" fill="#cbd5e1" />
    <rect x="75" y="64" width="8" height="3" fill="#94a3b8" />
    
    <g className="animate-bounce" style={{ animationDuration: '3s' }}>
      <circle cx="88" cy="58" r="2.5" fill="#fbbf24" opacity="0.6" />
      <circle cx="42" cy="68" r="3" fill="#fbbf24" opacity="0.5" />
      <circle cx="85" cy="70" r="2" fill="#fbbf24" opacity="0.4" />
    </g>
  </svg>
);

export const CatReportIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="30" ry="5" fill="#000" opacity="0.1" />
    
    <ellipse cx="60" cy="68" rx="20" ry="24" fill="#34d399" />
    
    <path d="M 44 54 L 40 44 L 44 50 Z" fill="#34d399" />
    <path d="M 76 54 L 80 44 L 76 50 Z" fill="#34d399" />
    
    <ellipse cx="60" cy="55" rx="18" ry="16" fill="#34d399" />
    
    <circle cx="53" cy="54" r="2.5" fill="#064e3b" />
    <circle cx="67" cy="54" r="2.5" fill="#064e3b" />
    <circle cx="54" cy="53" r="0.8" fill="#fff" />
    <circle cx="68" cy="53" r="0.8" fill="#fff" />
    
    <ellipse cx="60" cy="62" rx="1.5" ry="2" fill="#ec4899" />
    
    <path d="M 56 65 Q 60 66 64 65" stroke="#064e3b" strokeWidth="1" fill="none" opacity="0.4" />
    
    <g className="animate-fade-in" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}>
      <rect x="50" y="77" width="20" height="16" rx="1.5" fill="#fff" stroke="#34d399" strokeWidth="1.5" />
      <line x1="53" y1="81" x2="62" y2="81" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="53" y1="84" x2="67" y2="84" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="53" y1="87" x2="65" y2="87" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </g>
  </svg>
);

export const CatComfortIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="stripes-yellow" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#f59e0b" strokeWidth="4" />
      </pattern>
    </defs>
    
    <ellipse cx="60" cy="100" rx="30" ry="5" fill="#000" opacity="0.1" />
    
    <ellipse cx="60" cy="70" rx="22" ry="26" fill="#fbbf24" />
    <ellipse cx="60" cy="70" rx="22" ry="26" fill="url(#stripes-yellow)" opacity="0.3" />
    
    <path d="M 42 54 L 38 44 L 42 50 Z" fill="#fbbf24" />
    <path d="M 78 54 L 82 44 L 78 50 Z" fill="#fbbf24" />
    
    <ellipse cx="60" cy="56" rx="20" ry="18" fill="#fbbf24" />
    <ellipse cx="60" cy="56" rx="20" ry="18" fill="url(#stripes-yellow)" opacity="0.3" />
    
    <g className="animate-pulse" style={{ animationDuration: '3s' }}>
      <path d="M 48 54 Q 51 50 54 54" fill="none" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 66 54 Q 69 50 72 54" fill="none" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    
    <ellipse cx="60" cy="64" rx="1.5" ry="2" fill="#ec4899" />
    
    <path d="M 56 68 Q 60 69 64 68" stroke="#78350f" strokeWidth="1" fill="none" opacity="0.4" />
    
    <ellipse cx="83" cy="64" rx="10" ry="12" fill="#a0d8ef" opacity="0.3" />
    <ellipse cx="83" cy="64" rx="10" ry="12" fill="none" stroke="#60a5fa" strokeWidth="2" />
    
    <g className="animate-bounce" style={{ animationDuration: '2s' }}>
      <rect x="75" y="68" width="12" height="16" rx="6" fill="#f59e0b" />
      <circle cx="81" cy="73" r="2" fill="#fff" opacity="0.4" />
      <path d="M 77 80 Q 81 77 85 80" stroke="#d97706" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);
