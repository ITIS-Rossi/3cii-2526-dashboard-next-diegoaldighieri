// src/components/MateriaCard.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { Materia } from '@/types';

export default function MateriaCard({ m }: { m: Materia }) {
    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-xl transition-all hover:border-indigo-300">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                            {m.titolo.substring(0, 2).toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{m.titolo}</h3>
                        <p className="text-sm text-gray-600">{m.ore} ore settimanali</p>
                    </div>
                </div>

                <div className="space-y-1 text-sm">
                    <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">Insegnante:</span> {m.insegnante}
                    </p>
                    {m.libro && (
                        <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Libro:</span> {m.libro}
                        </p>
                    )}
                    {m.argomenti && m.argomenti.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {m.argomenti.slice(0, 3).map((arg, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs font-medium"
                                >
                                    {arg}
                                </span>
                            ))}
                            {m.argomenti.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                                    +{m.argomenti.length - 3} altri
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <Link
                    href={`/materie/${m.id}`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all hover:shadow-lg"
                >
                    Visualizza
                </Link>
            </div>
        </div>
    );
}