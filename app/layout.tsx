import Navbar from './(components)/Navbar';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Пасха 2025 - История, традиции и символы',
  description:
    'Познакомьтесь с глубоким смыслом и традициями главного православного праздника - Пасхи',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-easter-primary min-h-screen">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
