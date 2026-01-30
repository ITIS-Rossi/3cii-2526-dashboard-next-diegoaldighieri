// src/components/MateriaCard.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { Materia } from '@/types';

export default function MateriaCard({ m }: { m: Materia }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
                <h3 className="text-lg font-medium">{m.titolo}</h3>
                <p className="text-sm text-gray-600">Insegnante: {m.insegnante}</p>
                <p className="text-sm text-gray-600">Ore: {m.ore}</p>
            </div>
            <div className="flex gap-2 items-center">
                <Link href={`/materia/${m.id}`} className="text-sm px-3 py-1 border rounded hover:bg-gray-50">
                    Dettaglio
                </Link>
            </div>
        </div>
    );
}
