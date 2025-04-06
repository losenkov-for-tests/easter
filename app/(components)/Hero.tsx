'use client';

import { useState } from 'react';

export default function Hero() {
  const [eggClicks, setEggClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  const handleEasterEgg = () => {
    if (eggClicks >= 3) {
      setShowEgg(true);
      setTimeout(() => setShowEgg(false), 3000);
      setEggClicks(0);
    } else {
      setEggClicks((prev) => prev + 1);
    }
  };

  return (
    <section className="text-center mb-16 relative overflow-hidden rounded-2xl bg-easter-secondary py-20 px-8 shadow-lg">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-easter-accent drop-shadow-md">
        Светлое Христово Воскресение 2025
      </h1>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg md:text-xl mb-8 text-gray-800">
          Пасха — самый важный и радостный праздник в православном календаре, символизирующий победу
          жизни над смертью и света над тьмой.
        </p>

        {/* Интерактивный элемент с пасхалкой */}
        <div
          className="inline-block animate-bounce cursor-pointer"
          onClick={handleEasterEgg}
          role="button"
          tabIndex={0}>
          <span className="text-4xl">🐣</span>
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showEgg && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg text-center animate-pop-in">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">С Пасхой!</h2>
            <p>Христос Воскресе! Воистину Воскресе!</p>
          </div>
        </div>
      )}
    </section>
  );
}
