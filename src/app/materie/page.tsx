// src/app/materia/nuova/page.tsx
'use client';
import React from 'react';
import MateriaForm from '@/components/MateriaForm';
import { Materia } from '@/types';
import { loadMaterieFromStorage, saveMaterieToStorage } from '@/lib/materie';
import { useRouter } from 'next/navigation';

export default function NuovaMateriaPage() {
    const router = useRouter();

    function handleSave(m: Materia) {
        const current = loadMaterieFromStorage();
        const next = [m, ...current];
        saveMaterieToStorage(next);
        router.push('/');
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Nuova Materia</h2>
            <MateriaForm onSave={handleSave} />
        </div>
    );
}
