import { useEffect, useState } from 'react';

interface MousePaw {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export const MousePawPrints = () => {
  const [pawPrints, setPawPrints] = useState<MousePaw[]>([]);
  const [lastPawTime, setLastPawTime] = useState(0);

  useEffect(() => {
    let pawIdCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      if (currentTime - lastPawTime < 150) {
        return;
      }

      setLastPawTime(currentTime);
      
      const newPaw: MousePaw = {
        id: pawIdCounter++,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 60 - 30
      };

      setPawPrints(prev => [...prev, newPaw]);

      setTimeout(() => {
        setPawPrints(prev => prev.filter(paw => paw.id !== newPaw.id));
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastPawTime]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pawPrints.map((paw) => (
        <div
          key={paw.id}
          className="absolute"
          style={{
            left: `${paw.x}px`,
            top: `${paw.y}px`,
            transform: `translate(-50%, -50%) rotate(${paw.rotation}deg)`,
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-mouse-paw-fade"
          >
            <ellipse cx="25" cy="35" rx="7" ry="9" fill="#ff5252" opacity="0.6" />
            <ellipse cx="15" cy="20" rx="3.5" ry="4.5" fill="#ff5252" opacity="0.6" />
            <ellipse cx="25" cy="18" rx="3.5" ry="4.5" fill="#ff5252" opacity="0.6" />
            <ellipse cx="35" cy="20" rx="3.5" ry="4.5" fill="#ff5252" opacity="0.6" />
            <ellipse cx="25" cy="25" rx="3" ry="3.5" fill="#ff5252" opacity="0.6" />
          </svg>
        </div>
      ))}
      
      <style>{`
        @keyframes mousePawFade {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5) translateY(-20px);
          }
        }

        .animate-mouse-paw-fade {
          animation: mousePawFade 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
