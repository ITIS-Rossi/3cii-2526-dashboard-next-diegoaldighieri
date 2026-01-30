// src/app/profilo/page.tsx
import React from 'react';

export default function ProfiloPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
                            D
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">Profilo Studente</h2>
                            <p className="text-indigo-100 mt-1">Informazioni personali</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Nome</label>
                            <p className="text-lg font-medium text-gray-900">Diego</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                            <p className="text-lg font-medium text-gray-900">14529850@itisrossi.vi.it</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Anno di Corso</label>
                            <p className="text-lg font-medium text-gray-900">3° anno</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Corso di Studi</label>
                            <p className="text-lg font-medium text-gray-900">Informatica</p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900">Note e Informazioni</h3>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-gray-700">
                                Qui puoi inserire informazioni aggiuntive sullo studente, obiettivi di studio,
                                preferenze o note personali per organizzare meglio il tuo percorso formativo.
                            </p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg">
                            Modifica Profilo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}