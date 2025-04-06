import Link from 'next/link';
import { traditions } from '../data/traditions';
import EasterEggTrigger from '../(components)/EasterEggTrigger';
import Image from 'next/image';

export default function TraditionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-easter-accent text-center">
        Пасхальные Традиции
      </h1>

      <EasterEggTrigger />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {traditions.map((tradition) => (
          <Link
            key={tradition.id}
            href={`/traditions/${tradition.id}`}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all 
                     overflow-hidden transform hover:-translate-y-2 duration-300">
            <div className="h-48 bg-gray-100 relative overflow-hidden">
              {tradition.image ? (
                <Image src={tradition.image} alt={tradition.description} width={600} height={400} />
              ) : (
                <>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    aria-hidden
                  />
                  <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white z-10">
                    {tradition.title}
                  </h2>
                </>
              )}
            </div>
            <div className="p-6">
              <p className="text-gray-600 line-clamp-3">{tradition.description}</p>
              <div className="mt-4 flex items-center text-easter-accent font-medium">
                Узнать больше
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
