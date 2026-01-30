// src/app/layout.tsx
import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Dashboard Studente',
    description: 'Dashboard materie',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it">
        <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-md border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">DS</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Studente</h1>
                </div>
                <nav>
                    <ul className="flex gap-6 text-sm font-medium">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/materie/nuova" className="text-gray-700 hover:text-indigo-600 transition-colors">
                                Nuova Materia
                            </Link>
                        </li>
                        <li>
                            <Link href="/profilo" className="text-gray-700 hover:text-indigo-600 transition-colors">
                                Profilo
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>

        <footer className="text-center text-sm text-gray-600 py-6 border-t border-gray-200">
            © {new Date().getFullYear()} Dashboard Studente
        </footer>
        </body>
        </html>
    );
}