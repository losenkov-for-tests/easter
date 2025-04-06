import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/traditions"
      className="mb-6 inline-flex items-center text-easter-accent hover:text-easter-accent/80 transition-colors">
      <span className="mr-2">←</span>
      Назад к традициям
    </Link>
  );
}
