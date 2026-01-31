import React from 'react';

export default function ProfiloPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                            D
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-1">Profilo Studente</h2>
                            <p className="text-lg text-indigo-100">Le tue informazioni</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <InfoField label="Nome" value="Diego" />
                        <InfoField label="Email" value="14529850@itisrossi.vi.it" />
                        <InfoField label="Anno di Corso" value="3° anno" />
                        <InfoField label="Corso di Studi" value="Informatica" />
                    </div>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Note e Informazioni
                        </h3>
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                Dashboard per la gestione delle materie scolastiche
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base">
                            Modifica Profilo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoField({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {label}
            </label>
            <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {value}
            </p>
        </div>
    );
}