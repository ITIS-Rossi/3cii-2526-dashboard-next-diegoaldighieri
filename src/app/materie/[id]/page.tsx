'use client';
import React, { useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Materia } from '@/types';
import { loadMaterieFromStorage, saveMaterieToStorage } from '@/lib/materie';
import Link from 'next/link';

export default function MateriaDetailPage() {
    const params = useParams() as { id: string };
    const id = params?.id;
    const router = useRouter();

    const materia = useMemo<Materia | null>(() => {
        if (!id || typeof window === 'undefined') return null;
        const list = loadMaterieFromStorage();
        return list.find(m => m.id === id) ?? null;
    }, [id]);

    function handleDelete() {
        if (!materia) return;
        const ok = confirm('Sei sicuro di voler eliminare questa materia?');
        if (!ok) return;
        const next = loadMaterieFromStorage().filter(m => m.id !== materia.id);
        saveMaterieToStorage(next);
        router.push('/');
    }

    function handleEdit() {
        if (!materia) return;
        router.push(`/materie/${materia.id}/edit`);
    }

    if (!materia) {
        return (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-16 text-center">
                <div className="text-7xl mb-6">❌</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    Materia non trovata
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                    La materia che stai cercando non esiste
                </p>
                <Link
                    href="/"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base"
                >
                    Torna alla home
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-3xl">
                                {materia.titolo.substring(0, 2).toUpperCase()}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                {materia.titolo}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {materia.ore} ore settimanali
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/"
                            className="px-6 py-2.5 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold transition-colors text-base"
                        >
                            ← Indietro
                        </Link>
                        <button
                            onClick={handleEdit}
                            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors text-base"
                        >
                            ✏️ Modifica
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors text-base"
                        >
                            🗑️ Elimina
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                            Insegnante
                        </h3>
                        <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                            {materia.insegnante}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                            Ore Settimanali
                        </h3>
                        <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                            {materia.ore} ore
                        </p>
                    </div>
                </div>

                {materia.libro && (
                    <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                            Libro di Testo
                        </h3>
                        <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                            {materia.libro}
                        </p>
                    </div>
                )}

                {materia.argomenti && materia.argomenti.length > 0 && (
                    <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                            Argomenti del Corso
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {materia.argomenti.map((arg, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800"
                                >
                                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">•</span>
                                    <span className="text-base font-medium text-slate-900 dark:text-slate-100">
                                        {arg}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {materia.links && materia.links.length > 0 && (
                    <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                            Link Utili
                        </h3>
                        <div className="space-y-3">
                            {materia.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-200 font-medium transition-colors text-base"
                                >
                                    🔗 {link}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}