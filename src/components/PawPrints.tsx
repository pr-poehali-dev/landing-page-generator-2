import { useEffect, useState } from 'react';

interface PawPrint {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
}

export const PawPrints = () => {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);

  useEffect(() => {
    const generatePawPrints = () => {
      const newPawPrints: PawPrint[] = [];
      const numberOfPaws = 20;

      for (let i = 0; i < numberOfPaws; i++) {
        newPawPrints.push({
          id: i,
          x: Math.random() * 95,
          y: Math.random() * 95,
          rotation: Math.random() * 360,
          delay: Math.random() * 8
        });
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
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0"
            style={{
              animation: `pawFade 8s ease-in-out ${paw.delay}s infinite`
            }}
          >
            <ellipse cx="25" cy="35" rx="8" ry="10" fill="#2180a1" opacity="0.4" />
            <ellipse cx="15" cy="20" rx="4" ry="5" fill="#2180a1" opacity="0.4" />
            <ellipse cx="25" cy="18" rx="4" ry="5" fill="#2180a1" opacity="0.4" />
            <ellipse cx="35" cy="20" rx="4" ry="5" fill="#2180a1" opacity="0.4" />
            <ellipse cx="25" cy="25" rx="3.5" ry="4" fill="#2180a1" opacity="0.4" />
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

        @keyframes pawWalk {
          0% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(30px) translateY(-10px);
          }
          50% {
            transform: translateX(60px) translateY(5px);
          }
          75% {
            transform: translateX(90px) translateY(-15px);
          }
          100% {
            transform: translateX(120px) translateY(0);
          }
        }

        .animate-paw-walk {
          animation: pawWalk 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};