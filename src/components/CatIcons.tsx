export const CameraIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-20 h-20 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="animate-pulse-gentle">
      <ellipse cx="50" cy="65" rx="35" ry="30" fill="#2180a1" opacity="0.2" />
      <circle cx="35" cy="45" r="3" fill="#2180a1" className="animate-pulse" />
      <circle cx="65" cy="45" r="3" fill="#2180a1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <path
        d="M 30 35 Q 35 30 40 35 L 38 40 Q 35 38 32 40 Z"
        fill="#2180a1"
        className="animate-bounce"
        style={{ animationDuration: '2s' }}
      />
      <path
        d="M 60 35 Q 65 30 70 35 L 68 40 Q 65 38 62 40 Z"
        fill="#2180a1"
        className="animate-bounce"
        style={{ animationDuration: '2s', animationDelay: '0.3s' }}
      />
      <path d="M 40 55 Q 50 60 60 55" stroke="#2180a1" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="8" fill="none" stroke="#ff5252" strokeWidth="3" className="animate-pulse" />
      <circle cx="50" cy="50" r="5" fill="#ff5252" opacity="0.6" className="animate-ping" />
    </g>
  </svg>
);

export const HeartIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-20 h-20 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="animate-scale-in">
      <path
        d="M 50 75 L 30 55 Q 20 45 25 35 Q 30 25 40 30 Q 45 33 50 40 Q 55 33 60 30 Q 70 25 75 35 Q 80 45 70 55 Z"
        fill="#ff5252"
        className="animate-pulse-gentle"
      />
      <ellipse cx="35" cy="35" rx="3" ry="4" fill="#fff" opacity="0.7" />
      <circle cx="50" cy="55" r="4" fill="#fff" opacity="0.5" className="animate-bounce" style={{ animationDuration: '3s' }} />
      <path
        d="M 30 30 Q 35 25 40 30"
        stroke="#2180a1"
        strokeWidth="1.5"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M 60 30 Q 65 25 70 30"
        stroke="#2180a1"
        strokeWidth="1.5"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      <circle cx="50" cy="80" r="2" fill="#2180a1" className="animate-ping" />
    </g>
  </svg>
);

export const PlayIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-20 h-20 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <ellipse cx="50" cy="70" rx="30" ry="8" fill="#66bb6a" opacity="0.3" />
      <circle
        cx="50"
        cy="50"
        r="15"
        fill="#66bb6a"
        className="animate-bounce"
        style={{ animationDuration: '1.5s' }}
      />
      <path
        d="M 25 40 Q 30 30 35 40 L 33 45 Q 30 42 27 45 Z"
        fill="#2180a1"
        className="hover:scale-110 transition-transform"
      />
      <path
        d="M 65 40 Q 70 30 75 40 L 73 45 Q 70 42 67 45 Z"
        fill="#2180a1"
        className="hover:scale-110 transition-transform"
      />
      <circle cx="32" cy="45" r="2" fill="#2180a1" />
      <circle cx="68" cy="45" r="2" fill="#2180a1" />
      <path
        d="M 40 55 Q 50 58 60 55"
        stroke="#2180a1"
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M 20 60 Q 25 55 30 60"
        stroke="#ff5252"
        strokeWidth="2"
        fill="none"
        strokeDasharray="2,2"
        className="animate-pulse-gentle"
      />
      <path
        d="M 70 60 Q 75 55 80 60"
        stroke="#ff5252"
        strokeWidth="2"
        fill="none"
        strokeDasharray="2,2"
        className="animate-pulse-gentle"
        style={{ animationDelay: '0.5s' }}
      />
    </g>
  </svg>
);

export const SparkleIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-20 h-20 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="#ff5252"
        opacity="0.2"
        className="animate-ping"
      />
      <path
        d="M 35 40 Q 40 30 45 40 L 43 48 Q 40 45 37 48 Z"
        fill="#2180a1"
        className="animate-bounce"
        style={{ animationDuration: '2s' }}
      />
      <path
        d="M 55 40 Q 60 30 65 40 L 63 48 Q 60 45 57 48 Z"
        fill="#2180a1"
        className="animate-bounce"
        style={{ animationDuration: '2s', animationDelay: '0.3s' }}
      />
      <circle cx="40" cy="48" r="2.5" fill="#2180a1" className="animate-pulse" />
      <circle cx="60" cy="48" r="2.5" fill="#2180a1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <path d="M 45 58 Q 50 62 55 58" stroke="#2180a1" strokeWidth="2" fill="none" />
      <path
        d="M 50 35 L 52 40 L 57 41 L 53 45 L 54 50 L 50 47 L 46 50 L 47 45 L 43 41 L 48 40 Z"
        fill="#66bb6a"
        className="animate-spin"
        style={{ animationDuration: '8s', transformOrigin: '50px 42px' }}
      />
      <circle cx="70" cy="35" r="3" fill="#ff5252" className="animate-pulse" />
      <circle cx="30" cy="60" r="2" fill="#66bb6a" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
      <circle cx="75" cy="60" r="2.5" fill="#ff5252" className="animate-pulse" style={{ animationDelay: '1s' }} />
    </g>
  </svg>
);

export const ReportIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-20 h-20 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <rect
        x="30"
        y="25"
        width="40"
        height="50"
        rx="3"
        fill="#fff"
        stroke="#2180a1"
        strokeWidth="2"
        className="animate-fade-in"
      />
      <line x1="35" y1="35" x2="55" y2="35" stroke="#66bb6a" strokeWidth="2" className="animate-fade-in" style={{ animationDelay: '0.2s' }} />
      <line x1="35" y1="42" x2="65" y2="42" stroke="#2180a1" strokeWidth="1.5" className="animate-fade-in" style={{ animationDelay: '0.4s' }} />
      <line x1="35" y1="48" x2="62" y2="48" stroke="#2180a1" strokeWidth="1.5" className="animate-fade-in" style={{ animationDelay: '0.6s' }} />
      <rect x="35" y="55" width="30" height="12" rx="2" fill="#ff5252" opacity="0.3" className="animate-pulse-gentle" />
      <path
        d="M 25 50 Q 28 45 31 50 L 30 53 Q 28 52 26 53 Z"
        fill="#2180a1"
        className="animate-bounce"
        style={{ animationDuration: '2.5s' }}
      />
      <path
        d="M 69 50 Q 72 45 75 50 L 74 53 Q 72 52 70 53 Z"
        fill="#2180a1"
        className="animate-bounce"
        style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
      />
      <circle cx="28" cy="53" r="1.5" fill="#2180a1" className="animate-pulse" />
      <circle cx="72" cy="53" r="1.5" fill="#2180a1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <path d="M 42 60 Q 50 63 58 60" stroke="#2180a1" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

export const PhoneIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-20 h-20 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <rect
        x="35"
        y="20"
        width="30"
        height="55"
        rx="4"
        fill="#2180a1"
        className="animate-scale-in"
      />
      <rect
        x="38"
        y="25"
        width="24"
        height="40"
        rx="2"
        fill="#fff"
      />
      <circle cx="50" cy="70" r="3" fill="#fff" className="animate-pulse" />
      <path
        d="M 43 35 Q 45 32 47 35 L 46 37 Q 45 36 44 37 Z"
        fill="#ff5252"
        className="animate-bounce"
        style={{ animationDuration: '2s' }}
      />
      <path
        d="M 53 35 Q 55 32 57 35 L 56 37 Q 55 36 54 37 Z"
        fill="#ff5252"
        className="animate-bounce"
        style={{ animationDuration: '2s', animationDelay: '0.3s' }}
      />
      <circle cx="45" cy="37" r="1" fill="#2180a1" />
      <circle cx="55" cy="37" r="1" fill="#2180a1" />
      <path d="M 47 42 Q 50 44 53 42" stroke="#ff5252" strokeWidth="1.5" fill="none" />
      <path
        d="M 42 50 L 47 50"
        stroke="#66bb6a"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-pulse"
      />
      <path
        d="M 42 55 L 58 55"
        stroke="#2180a1"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-pulse"
        style={{ animationDelay: '0.3s' }}
      />
      <circle cx="25" cy="35" r="3" fill="#66bb6a" className="animate-ping" />
      <circle cx="75" cy="45" r="2.5" fill="#ff5252" className="animate-ping" style={{ animationDelay: '0.5s' }} />
    </g>
  </svg>
);
