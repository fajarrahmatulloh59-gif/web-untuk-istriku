import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'heart' | 'petal' | 'sparkle';
  color: string;
  duration: number;
  delay: number;
}

export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate initial gentle background particles
    const items: Particle[] = [];
    const colors = ['#FFDDE5', '#F8B9C9', '#FFE8A8', '#D8EEDB', '#FFAAA6'];
    const types: ('heart' | 'petal' | 'sparkle')[] = ['heart', 'petal', 'petal', 'sparkle'];

    for (let i = 0; i < 24; i++) {
      items.push({
        id: i,
        x: Math.random() * 95,
        y: Math.random() * 90,
        size: Math.floor(Math.random() * 12) + 12,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 8 + 7,
        delay: Math.random() * 5,
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute opacity-40 transition-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `petal-fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.type === 'heart' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill={p.color}
              stroke="none"
              className="drop-shadow-sm"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {p.type === 'petal' && (
            <svg
              width={p.size}
              height={p.size * 1.3}
              viewBox="0 0 20 28"
              fill={p.color}
              stroke="none"
              className="drop-shadow-sm"
            >
              <path d="M10 0 C18 6, 20 20, 10 28 C0 20, 2 6, 10 0 Z" />
            </svg>
          )}

          {p.type === 'sparkle' && (
            <svg
              width={p.size * 0.8}
              height={p.size * 0.8}
              viewBox="0 0 24 24"
              fill={p.color}
              stroke="none"
            >
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
