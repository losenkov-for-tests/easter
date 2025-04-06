import Hero from './(components)/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <article className="max-w-6xl mx-auto px-4">
      <Hero />
      <div className="grid md:grid-cols-2 gap-12 mb-16 text-black/60">
        <section className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-easter-accent">История праздника</h2>
            <p className="mb-4">
              Пасха отмечается в первое воскресенье после первого весеннего полнолуния. В 2025 году
              православная Пасха приходится на 20 апреля.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Древнейший христианский праздник</li>
              <li>Установлен в честь Воскресения Христова</li>
              <li>Символизирует обновление и надежду</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-easter-accent">Символы Пасхи</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-easter-primary/90 rounded-lg">
                <h3 className="font-semibold mb-2">Яйцо</h3>
                <p className="text-sm">Символ жизни и воскресения</p>
              </div>
              <div className="p-4 bg-easter-primary/90 rounded-lg">
                <h3 className="font-semibold mb-2">Кулич</h3>
                <p className="text-sm">Символ присутствия Божия</p>
              </div>
              <div className="p-4 bg-easter-primary/90 rounded-lg">
                <h3 className="font-semibold mb-2">Огонь</h3>
                <p className="text-sm">Символ Света Божьего</p>
              </div>
              <div className="p-4 bg-easter-primary/90 rounded-lg">
                <h3 className="font-semibold mb-2">Барашек</h3>
                <p className="text-sm">Символ агнца Божия</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="text-center bg-easter-accent/10 py-16 rounded-2xl mb-16 text-black/80">
        <h2 className="text-3xl font-bold mb-6">Узнайте больше о традициях</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Откройте для себя богатство пасхальных обычаев и их глубокий духовный смысл
        </p>
        <Link
          href="/traditions"
          className="inline-block bg-easter-accent text-white px-8 py-3 rounded-lg
                   hover:bg-easter-accent/90 transition-colors shadow-md">
          Исследовать традиции →
        </Link>
      </section>
    </article>
  );
}
