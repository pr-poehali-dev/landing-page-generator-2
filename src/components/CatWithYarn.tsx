import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export const CatWithYarn = () => {
  const [yarnPos, setYarnPos] = useState<Position>({ x: 10, y: 20 });
  const [catPos, setCatPos] = useState<Position>({ x: 5, y: 15 });
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const moveYarn = () => {
      const newX = Math.random() * 80 + 10;
      const newY = Math.random() * 70 + 15;
      setYarnPos({ x: newX, y: newY });
      
      setTimeout(() => {
        setCatPos({ x: newX - 8, y: newY });
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 600);
      }, 800);
    };

    moveYarn();
    const interval = setInterval(moveYarn, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute transition-all duration-1000 ease-in-out"
        style={{
          left: `${yarnPos.x}%`,
          top: `${yarnPos.y}%`,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          style={{ animationDuration: '3s' }}
        >
          <circle cx="25" cy="25" r="15" fill="#ff5252" opacity="0.7" />
          <path
            d="M 15 25 Q 20 15 30 20 Q 35 25 30 30 Q 25 35 20 30 Q 15 25 15 25"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 25 10 Q 30 15 25 20"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <circle cx="25" cy="25" r="3" fill="#fff" opacity="0.3" />
        </svg>
      </div>

      <div
        className={`absolute transition-all duration-1000 ease-out ${isJumping ? 'scale-110' : 'scale-100'}`}
        style={{
          left: `${catPos.x}%`,
          top: `${catPos.y}%`,
          transitionTimingFunction: isJumping ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
        }}
      >
        <svg
          width="80"
          height="70"
          viewBox="0 0 100 85"
          xmlns="http://www.w3.org/2000/svg"
          className={isJumping ? 'animate-bounce' : ''}
          style={{ animationDuration: '0.6s', animationIterationCount: '1' }}
        >
          <defs>
            <radialGradient id="catBodyGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#2d8fb8" />
              <stop offset="100%" stopColor="#1e6a8a" />
            </radialGradient>
            <radialGradient id="catBellyGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#e8f4f8" />
              <stop offset="100%" stopColor="#b8d8e8" />
            </radialGradient>
          </defs>
          
          <ellipse cx="50" cy="78" rx="28" ry="5" fill="#000" opacity="0.15" />
          
          <ellipse cx="68" cy="58" rx="8" ry="12" fill="url(#catBodyGradient)" />
          <ellipse cx="32" cy="58" rx="8" ry="12" fill="url(#catBodyGradient)" />
          <ellipse cx="70" cy="50" rx="7" ry="11" fill="url(#catBodyGradient)" />
          <ellipse cx="30" cy="50" rx="7" ry="11" fill="url(#catBodyGradient)" />
          
          <ellipse cx="50" cy="48" rx="24" ry="18" fill="url(#catBodyGradient)" />
          
          <ellipse cx="50" cy="50" rx="18" ry="14" fill="url(#catBellyGradient)" opacity="0.7" />
          
          <circle cx="50" cy="28" r="16" fill="url(#catBodyGradient)" />
          
          <ellipse cx="50" cy="32" rx="11" ry="9" fill="url(#catBellyGradient)" opacity="0.6" />
          
          <path d="M 36 18 L 32 8 L 38 14 Q 40 18 36 18 Z" fill="url(#catBodyGradient)" />
          <path d="M 64 18 L 68 8 L 62 14 Q 60 18 64 18 Z" fill="url(#catBodyGradient)" />
          <path d="M 36 16 L 34 10 L 38 15 Z" fill="#ffc0cb" opacity="0.6" />
          <path d="M 64 16 L 66 10 L 62 15 Z" fill="#ffc0cb" opacity="0.6" />
          
          <ellipse cx="42" cy="28" rx="4.5" ry="5.5" fill="#fff" />
          <ellipse cx="58" cy="28" rx="4.5" ry="5.5" fill="#fff" />
          <ellipse cx="43" cy="28" rx="2.5" ry="3.5" fill="#0a3d52" />
          <ellipse cx="59" cy="28" rx="2.5" ry="3.5" fill="#0a3d52" />
          <ellipse cx="43.5" cy="27" rx="1" ry="1.5" fill="#fff" opacity="0.8" />
          <ellipse cx="59.5" cy="27" rx="1" ry="1.5" fill="#fff" opacity="0.8" />
          
          <ellipse cx="50" cy="35" rx="2.5" ry="3" fill="#ff6b6b" />
          <path d="M 50 35 L 48 38 M 50 35 L 52 38" stroke="#ff6b6b" strokeWidth="1" />
          
          <path d="M 44 38 Q 50 40 56 38" stroke="#0a3d52" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
          
          <path d="M 25 28 L 10 26 M 25 32 L 8 34 M 25 36 L 10 39" stroke="#0a3d52" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
          <path d="M 75 28 L 90 26 M 75 32 L 92 34 M 75 36 L 90 39" stroke="#0a3d52" strokeWidth="1" opacity="0.7" strokeLinecap="round" />
          
          <ellipse cx="46" cy="22" rx="1.5" ry="1" fill="#0a3d52" opacity="0.4" />
          <ellipse cx="54" cy="22" rx="1.5" ry="1" fill="#0a3d52" opacity="0.4" />
          
          <path 
            d="M 72 52 Q 80 48 86 52 Q 88 58 82 70" 
            stroke="url(#catBodyGradient)" 
            strokeWidth="5" 
            fill="none" 
            strokeLinecap="round"
          />
          
          <path d="M 48 48 Q 46 52 46 56 M 52 48 Q 54 52 54 56" stroke="#1e6a8a" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
};