// src/app/page.tsx
'use client';
import React, { useState } from 'react';
import MateriaCard from '@/components/MateriaCard';
import { Materia } from '@/types';
import { loadMaterieFromStorage } from '@/lib/materie';
import Link from 'next/link';

export default function HomePage() {
    // Lazy initialization: la funzione viene eseguita solo al primo render
    const [materie] = useState<Materia[]>(() => {
        if (typeof window !== 'undefined') {
            return loadMaterieFromStorage();
        }
        return [];
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Materie</h2>
                <Link href="/materie/nuova" className="text-sm px-3 py-1 border rounded hover:bg-gray-100">
                    Aggiungi nuova materia
                </Link>
            </div>

            <div className="grid gap-4">
                {materie.length === 0 ? (
                    <p className="text-gray-500">Nessuna materia presente.</p>
                ) : (
                    materie.map(m => <MateriaCard key={m.id} m={m} />)
                )}
            </div>
        </div>
    );
}