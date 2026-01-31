'use client';
import React, { useState } from 'react';
import MateriaCard from '@/components/MateriaCard';
import { Materia } from '@/types';
import { loadMaterieFromStorage } from '@/lib/materie';
import Link from 'next/link';

export default function HomePage() {
    const [materie] = useState<Materia[]>(() => {
        if (typeof window !== 'undefined') {
            return loadMaterieFromStorage();
        }
        return [];
    });

    return (
        <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                            Le tue Materie
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Gestisci e visualizza le tue materie
                        </p>
                    </div>
                    <Link
                        href="/materie/nuova"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base whitespace-nowrap"
                    >
                        + Aggiungi Materia
                    </Link>
                </div>
            </div>

            {materie.length === 0 ? (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-16 text-center">
                    <div className="text-7xl mb-6">📚</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                        Nessuna materia
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                        Inizia ad aggiungere le tue materie per organizzare lo studio
                    </p>
                    <Link
                        href="/materie/nuova"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base"
                    >
                        Aggiungi la prima materia
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6">
                    {materie.map(m => <MateriaCard key={m.id} m={m} />)}
                </div>
            )}
        </div>
    );
}