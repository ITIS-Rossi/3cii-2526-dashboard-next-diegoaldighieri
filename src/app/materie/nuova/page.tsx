'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NuovaMateria() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [formData, setFormData] = useState({
        titolo: '',
        prof: '',
        ore: '',
        libro: '',
        argomenti: '',
        link: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Rimuovi l'errore quando l'utente inizia a digitare
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.titolo.trim()) {
            newErrors.titolo = 'Il titolo è obbligatorio';
        }

        if (!formData.prof.trim()) {
            newErrors.prof = 'Il nome del professore è obbligatorio';
        }

        if (!formData.ore || parseInt(formData.ore) <= 0) {
            newErrors.ore = 'Inserisci un numero di ore valido';
        }

        if (!formData.libro.trim()) {
            newErrors.libro = 'Il libro di testo è obbligatorio';
        }

        if (!formData.argomenti.trim()) {
            newErrors.argomenti = 'Inserisci almeno un argomento';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simula un salvataggio
        await new Promise(resolve => setTimeout(resolve, 1000));

        // In una vera applicazione, qui faresti una chiamata API
        console.log('Nuova materia:', {
            ...formData,
            ore: parseInt(formData.ore),
            argomenti: formData.argomenti.split(',').map(a => a.trim()),
        });

        // Reindirizza alla home
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-6 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Torna alla home
                </Link>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                        <h1 className="text-4xl font-bold mb-2">Nuova Materia</h1>
                        <p className="text-indigo-100">Compila il form per aggiungere una nuova materia</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Titolo */}
                        <div>
                            <label htmlFor="titolo" className="block text-sm font-semibold text-gray-700 mb-2">
                                Titolo materia *
                            </label>
                            <input
                                type="text"
                                id="titolo"
                                name="titolo"
                                value={formData.titolo}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.titolo ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                placeholder="Es: Matematica"
                            />
                            {errors.titolo && (
                                <p className="mt-1 text-sm text-red-600">{errors.titolo}</p>
                            )}
                        </div>

                        {/* Professore */}
                        <div>
                            <label htmlFor="prof" className="block text-sm font-semibold text-gray-700 mb-2">
                                Professore *
                            </label>
                            <input
                                type="text"
                                id="prof"
                                name="prof"
                                value={formData.prof}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.prof ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                placeholder="Es: Mario Rossi"
                            />
                            {errors.prof && (
                                <p className="mt-1 text-sm text-red-600">{errors.prof}</p>
                            )}
                        </div>

                        {/* Ore */}
                        <div>
                            <label htmlFor="ore" className="block text-sm font-semibold text-gray-700 mb-2">
                                Ore settimanali *
                            </label>
                            <input
                                type="number"
                                id="ore"
                                name="ore"
                                value={formData.ore}
                                onChange={handleChange}
                                min="1"
                                className={`w-full px-4 py-3 border ${errors.ore ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                placeholder="Es: 4"
                            />
                            {errors.ore && (
                                <p className="mt-1 text-sm text-red-600">{errors.ore}</p>
                            )}
                        </div>

                        {/* Libro */}
                        <div>
                            <label htmlFor="libro" className="block text-sm font-semibold text-gray-700 mb-2">
                                Libro di testo *
                            </label>
                            <input
                                type="text"
                                id="libro"
                                name="libro"
                                value={formData.libro}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.libro ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                placeholder="Es: Matematica.blu Vol. 3"
                            />
                            {errors.libro && (
                                <p className="mt-1 text-sm text-red-600">{errors.libro}</p>
                            )}
                        </div>

                        {/* Argomenti */}
                        <div>
                            <label htmlFor="argomenti" className="block text-sm font-semibold text-gray-700 mb-2">
                                Argomenti *
                            </label>
                            <textarea
                                id="argomenti"
                                name="argomenti"
                                value={formData.argomenti}
                                onChange={handleChange}
                                rows={4}
                                className={`w-full px-4 py-3 border ${errors.argomenti ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                placeholder="Inserisci gli argomenti separati da virgola. Es: Limiti, Derivate, Integrali"
                            />
                            <p className="mt-1 text-sm text-gray-500">Separa gli argomenti con una virgola</p>
                            {errors.argomenti && (
                                <p className="mt-1 text-sm text-red-600">{errors.argomenti}</p>
                            )}
                        </div>

                        {/* Link immagine libro */}
                        <div>
                            <label htmlFor="link" className="block text-sm font-semibold text-gray-700 mb-2">
                                Link immagine libro (opzionale)
                            </label>
                            <input
                                type="url"
                                id="link"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                                placeholder="https://esempio.com/immagine-libro.jpg"
                            />
                            <p className="mt-1 text-sm text-gray-500">URL dell&apos;immagine di copertina del libro</p>
                        </div>

                        {/* Pulsanti */}
                        <div className="flex gap-4 pt-6 border-t border-gray-200">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Salvataggio...
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Salva materia
                                    </>
                                )}
                            </button>

                            <Link
                                href="/"
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                            >
                                Annulla
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}