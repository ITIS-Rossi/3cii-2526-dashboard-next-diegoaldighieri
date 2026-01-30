// src/app/page.tsx
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
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Le tue Materie</h2>
                    <p className="text-gray-600 mt-1">Gestisci e visualizza tutte le tue materie</p>
                </div>
                <Link
                    href="/materie/nuova"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all hover:shadow-xl"
                >
                    + Aggiungi Materia
                </Link>
            </div>

            <div className="grid gap-4">
                {materie.length === 0 ? (
                    <div className="bg-white p-12 rounded-lg shadow-md border border-gray-200 text-center">
                        <div className="text-6xl mb-4">📚</div>
                        <p className="text-xl text-gray-900 font-semibold mb-2">Nessuna materia presente</p>
                        <p className="text-gray-600 mb-6">Inizia ad aggiungere le tue materie per organizzare lo studio</p>
                        <Link
                            href="/materie/nuova"
                            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
                        >
                            Aggiungi la prima materia
                        </Link>
                    </div>
                ) : (
                    materie.map(m => <MateriaCard key={m.id} m={m} />)
                )}
            </div>
        </div>
    );
}