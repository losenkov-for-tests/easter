import BackButton from '@/app/(components)/BackButton';
import { traditions } from '@/app/data/traditions';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tradition = traditions.find((t) => t.id === Number(id));

  if (!tradition) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BackButton />

      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          {tradition.image ? (
            <Image
              src={tradition.image}
              alt={tradition.description}
              fill
              className="object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-easter-accent/20 to-easter-primary/20" />
          )}
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-easter-accent">{tradition.title}</h1>

          <div className="prose max-w-none text-black/70">
            <p className="text-lg text-gray-700 mb-6">{tradition.details}</p>

            {tradition.symbolism && (
              <div className="bg-easter-primary/10 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-3">Символическое значение</h2>
                <p>{tradition.symbolism}</p>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 text-black/70">
              <div className="bg-white p-4 rounded-lg border border-easter-accent/20">
                <h3 className="font-semibold mb-2">📅 Когда появилось</h3>
                <p>{tradition.origin || 'Точное происхождение неизвестно'}</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-easter-accent/20">
                <h3 className="font-semibold mb-2">🌍 География</h3>
                <p>{tradition.geography || 'Распространено во многих странах'}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// Генерация статических путей
export async function generateStaticParams() {
  return traditions.map((tradition) => ({
    params: {
      id: tradition.id.toString(),
    },
  }));
}
