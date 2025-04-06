'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const activeLinkClassName = 'text-easter-accent font-bold';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white p-4">
      <div className="container flex mx-auto justify-between items-center">
        <Link href="/" className="text-easter-accent font-bold text-xl">
          {'<'}Easter {'/>'}
        </Link>
        <div className="flex gap-4 text-black/30 text-lg">
          <Link href="/" className={clsx({ [activeLinkClassName]: pathname === '/' })}>
            Главная
          </Link>
          <Link
            href="/traditions"
            className={clsx({
              [activeLinkClassName]: pathname.startsWith('/traditions'),
            })}>
            Традиции
          </Link>
        </div>
      </div>
    </nav>
  );
}
