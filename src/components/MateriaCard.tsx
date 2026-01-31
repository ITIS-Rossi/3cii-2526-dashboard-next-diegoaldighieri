'use client';
import React from 'react';
import Link from 'next/link';
import { Materia } from '@/types';

export default function MateriaCard({ m }: { m: Materia }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-white font-bold text-xl">
                                {m.titolo.substring(0, 2).toUpperCase()}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                {m.titolo}
                            </h3>
                            <p className="text-base text-slate-600 dark:text-slate-400">
                                {m.ore} ore/settimana
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 text-base">
                        <p className="text-slate-700 dark:text-slate-300">
                            <span className="font-semibold text-slate-900 dark:text-slate-100">Prof:</span> {m.insegnante}
                        </p>
                        {m.libro && (
                            <p className="text-slate-700 dark:text-slate-300">
                                <span className="font-semibold text-slate-900 dark:text-slate-100">Libro:</span> {m.libro}
                            </p>
                        )}
                        {m.argomenti && m.argomenti.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {m.argomenti.slice(0, 3).map((arg, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                                    >
                                        {arg}
                                    </span>
                                ))}
                                {m.argomenti.length > 3 && (
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                                        +{m.argomenti.length - 3}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <Link
                    href={`/materie/${m.id}`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-base"
                >
                    Visualizza
                </Link>
            </div>
        </div>
    );
}