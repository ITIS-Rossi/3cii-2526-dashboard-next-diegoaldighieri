// src/app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import MateriaCard from '@/components/MateriaCard';
import { Materia } from '@/types';
import { loadMaterieFromStorage, saveMaterieToStorage } from '@/lib/materie';
import Link from 'next/link';

export default function HomePage() {
    const [materie, setMaterie] = useState<Materia[]>(() => {
        return loadMaterieFromStorage();
    }, []);

  function handleAdd(newM: Materia) {
    const next = [newM, ...materie];
    setMaterie(next);
    saveMaterieToStorage(next);
  }

  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Materie</h2>
          <Link href="/materia/nuova" className="text-sm px-3 py-1 border rounded">Aggiungi nuova materia</Link>
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
