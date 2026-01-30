// src/app/layout.tsx
import './globals.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Dashboard Studente',
    description: 'Dashboard materie',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it">
        <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="Logo" width={48} height={48} />
                    <h1 className="text-xl font-semibold">Dashboard Studente</h1>
                </div>
                <nav>
                    <ul className="flex gap-4 text-sm">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/materia/nuova">Nuova Materia</Link>
                        </li>
                        <li>
                            <Link href="/profilo">Profilo</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>

        <footer className="text-center text-xs text-gray-500 py-6">
            © {new Date().getFullYear()} Dashboard Studente
        </footer>
        </body>
        </html>
    );
}
