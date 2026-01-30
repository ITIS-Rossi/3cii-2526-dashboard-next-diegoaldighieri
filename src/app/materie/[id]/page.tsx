// src/app/materie/[id]/page.tsx
'use client';
import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
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

    if (!materia) {
        return (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">❌</div>
                <p className="text-xl text-gray-900 font-semibold mb-2">Materia non trovata</p>
                <p className="text-gray-600 mb-6">La materia che stai cercando non esiste</p>
                <Link href="/" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all">
                    Torna alla home
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-2xl">
                            {materia.titolo.substring(0, 2).toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">{materia.titolo}</h2>
                        <p className="text-gray-600">{materia.ore} ore settimanali</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Link href="/" className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all">
                        ← Indietro
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition-all hover:shadow-lg"
                    >
                        🗑️ Elimina
                    </button>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Insegnante</h3>
                        <p className="text-lg font-medium text-gray-900">{materia.insegnante}</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ore Settimanali</h3>
                        <p className="text-lg font-medium text-gray-900">{materia.ore} ore</p>
                    </div>
                </div>

                {materia.libro && (
                    <div className="space-y-2 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Libro di Testo</h3>
                        <p className="text-lg font-medium text-gray-900">{materia.libro}</p>
                    </div>
                )}

                {materia.argomenti && materia.argomenti.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Argomenti del Corso</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {materia.argomenti.map((arg, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <span className="text-indigo-600 font-bold">•</span>
                                    <span className="text-gray-900 font-medium">{arg}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {materia.links && materia.links.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Link Utili</h3>
                        <div className="space-y-2">
                            {materia.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 text-blue-700 hover:text-blue-900 font-medium transition-colors"
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