// src/app/materia/[id]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Materia } from '@/types';
import { loadMaterieFromStorage, saveMaterieToStorage } from '@/lib/materie';
import Link from 'next/link';

export default function MateriaDetailPage() {
    const params = useParams() as { id: string };
    const id = params?.id;
    const router = useRouter();

    const [materia, setMateria] = useState<Materia | null>(null);

    useEffect(() => {
        if (!id) return;
        const list = loadMaterieFromStorage();
        const found = list.find(m => m.id === id) ?? null;
        setMateria(found);
    }, [id]);

    function handleDelete() {
        if (!materia) return;
        const ok = confirm('Eliminare questa materia?');
        if (!ok) return;
        const next = loadMaterieFromStorage().filter(m => m.id !== materia.id);
        saveMaterieToStorage(next);
        router.push('/');
    }

    if (!materia) {
        return <p>Materia non trovata.</p>;
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{materia.titolo}</h2>
                <div className="flex gap-2">
                    <Link href="/" className="px-3 py-1 border rounded">Torna</Link>
                    <button onClick={handleDelete} className="px-3 py-1 border rounded text-red-600">Elimina</button>
                </div>
            </div>

            <div className="bg-white p-4 rounded shadow space-y-2">
                <p><strong>Insegnante:</strong> {materia.insegnante}</p>
                <p><strong>Ore:</strong> {materia.ore}</p>
                <p><strong>Libro:</strong> {materia.libro ?? '—'}</p>

                <div>
                    <strong>Argomenti:</strong>
                    <ul className="list-disc ml-6">
                        {materia.argomenti.length ? materia.argomenti.map((a, i) => <li key={i}>{a}</li>) : <li>—</li>}
                    </ul>
                </div>

                <div>
                    <strong>Link utili:</strong>
                    <ul className="ml-6">
                        {materia.links && materia.links.length ? materia.links.map((l, i) => (
                            <li key={i}><a href={l} target="_blank" rel="noreferrer" className="text-blue-600 underline">{l}</a></li>
                        )) : <li>—</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}
