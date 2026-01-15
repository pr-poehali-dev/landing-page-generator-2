import { useEffect, useState } from 'react';

interface PawPrint {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  isLeft: boolean;
}

export const PawPrints = () => {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);

  useEffect(() => {
    const generatePawPrints = () => {
      const newPawPrints: PawPrint[] = [];
      const numberOfTrails = 8;
      
      for (let trail = 0; trail < numberOfTrails; trail++) {
        const startX = Math.random() * 70 + 10;
        const startY = Math.random() * 80 + 10;
        const angle = Math.random() * 360;
        const pawsInTrail = 6;
        
        for (let i = 0; i < pawsInTrail; i++) {
          const distance = i * 35;
          const angleRad = (angle * Math.PI) / 180;
          const offsetX = Math.cos(angleRad) * distance;
          const offsetY = Math.sin(angleRad) * distance;
          
          const isLeft = i % 2 === 0;
          const perpOffset = isLeft ? -8 : 8;
          const perpX = Math.cos(angleRad + Math.PI / 2) * perpOffset;
          const perpY = Math.sin(angleRad + Math.PI / 2) * perpOffset;
          
          newPawPrints.push({
            id: trail * pawsInTrail + i,
            x: startX + (offsetX / window.innerWidth) * 100 + (perpX / window.innerWidth) * 100,
            y: startY + (offsetY / window.innerHeight) * 100 + (perpY / window.innerHeight) * 100,
            rotation: angle + (isLeft ? -15 : 15),
            delay: trail * 2 + i * 0.3,
            isLeft
          });
        }
      }

      setPawPrints(newPawPrints);
    };

    generatePawPrints();
    const interval = setInterval(generatePawPrints, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pawPrints.map((paw) => (
        <div
          key={paw.id}
          className="absolute animate-paw-walk"
          style={{
            left: `${paw.x}%`,
            top: `${paw.y}%`,
            transform: `rotate(${paw.rotation}deg)`,
            animationDelay: `${paw.delay}s`
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0"
            style={{
              animation: `pawFade 8s ease-in-out ${paw.delay}s infinite`
            }}
          >
            <circle cx="20" cy="28" r="6" fill="#2180a1" opacity="0.5" />
            <circle cx="12" cy="18" r="3.5" fill="#2180a1" opacity="0.5" />
            <circle cx="20" cy="15" r="3.5" fill="#2180a1" opacity="0.5" />
            <circle cx="28" cy="18" r="3.5" fill="#2180a1" opacity="0.5" />
          </svg>
        </div>
      ))}
      
      <style>{`
        @keyframes pawFade {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(0);
          }
          15% {
            opacity: 0.7;
            transform: scale(1.1) translateY(0);
          }
          40% {
            opacity: 0.6;
            transform: scale(1) translateY(-10px);
          }
          70% {
            opacity: 0.4;
            transform: scale(0.95) translateY(-20px);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translateY(-30px);
          }
        }

        .animate-paw-walk {
          animation: none;
        }
      `}</style>
    </div>
  );
};