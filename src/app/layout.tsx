import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Dashboard Studente',
    description: 'Gestione materie scolastiche',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it">
        <body className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-6xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">DS</span>
                        </div>
                        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                            Dashboard Studente
                        </h1>
                    </Link>
                    <nav>
                        <ul className="flex gap-6">
                            <li>
                                <Link
                                    href="/"
                                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/materie/nuova"
                                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                                >
                                    Nuova Materia
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profilo"
                                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                                >
                                    Profilo
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-8">
            {children}
        </main>

        <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 py-8 border-t border-slate-200 dark:border-slate-700">
            © {new Date().getFullYear()} Dashboard Studente
        </footer>
        </body>
        </html>
    );
}