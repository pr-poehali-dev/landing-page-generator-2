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
          width="60"
          height="60"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          className={isJumping ? 'animate-bounce' : ''}
          style={{ animationDuration: '0.6s', animationIterationCount: '1' }}
        >
          <ellipse cx="40" cy="65" rx="20" ry="8" fill="#2180a1" opacity="0.2" />
          
          <ellipse cx="40" cy="45" rx="18" ry="22" fill="#2180a1" opacity="0.8" />
          
          <circle cx="30" cy="28" r="8" fill="#2180a1" opacity="0.8" />
          <circle cx="50" cy="28" r="8" fill="#2180a1" opacity="0.8" />
          <path d="M 28 22 L 25 15 L 31 20 Z" fill="#2180a1" opacity="0.8" />
          <path d="M 52 22 L 55 15 L 49 20 Z" fill="#2180a1" opacity="0.8" />
          
          <circle cx="33" cy="40" r="3" fill="#fff" />
          <circle cx="47" cy="40" r="3" fill="#fff" />
          <circle cx="33" cy="40" r="1.5" fill="#000" />
          <circle cx="47" cy="40" r="1.5" fill="#000" />
          
          <path d="M 35 48 L 40 50 L 45 48" stroke="#ff5252" strokeWidth="2" fill="none" strokeLinecap="round" />
          <ellipse cx="40" cy="46" rx="1.5" ry="2" fill="#ff5252" />
          
          <path
            d="M 20 40 L 10 38 M 20 45 L 8 46 M 20 50 L 10 52"
            stroke="#2180a1"
            strokeWidth="1.5"
            opacity="0.6"
            strokeLinecap="round"
          />
          <path
            d="M 60 40 L 70 38 M 60 45 L 72 46 M 60 50 L 70 52"
            stroke="#2180a1"
            strokeWidth="1.5"
            opacity="0.6"
            strokeLinecap="round"
          />
          
          <path
            d="M 55 60 Q 65 55 70 65"
            stroke="#2180a1"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
};
