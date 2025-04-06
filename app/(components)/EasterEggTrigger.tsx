'use client';

import { useEffect, useState } from 'react';

export default function EasterEggTrigger() {
  const [eggVisible, setEggVisible] = useState(false);

  useEffect(() => {
    const handleKonami = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setEggVisible(true);
        setTimeout(() => setEggVisible(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKonami);
    return () => window.removeEventListener('keydown', handleKonami);
  }, []);

  return eggVisible ? (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg animate-bounce">
      🐰 Христос Воскресе!
    </div>
  ) : null;
}
