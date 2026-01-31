'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loadMaterieFromStorage, saveMaterieToStorage } from '@/lib/materie';
import { Materia } from '@/types';

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
        setFormData(prev => ({ ...prev, [name]: value }));
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
        if (!formData.titolo.trim()) newErrors.titolo = 'Il titolo è obbligatorio';
        if (!formData.prof.trim()) newErrors.prof = 'Il professore è obbligatorio';
        if (!formData.ore || parseInt(formData.ore) <= 0) newErrors.ore = 'Inserisci un numero di ore valido';
        if (!formData.libro.trim()) newErrors.libro = 'Il libro è obbligatorio';
        if (!formData.argomenti.trim()) newErrors.argomenti = 'Inserisci almeno un argomento';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const nuovaMateria: Materia = {
                id: Date.now().toString(),
                titolo: formData.titolo.trim(),
                insegnante: formData.prof.trim(),
                ore: parseInt(formData.ore),
                libro: formData.libro.trim(),
                argomenti: formData.argomenti.split(',').map(a => a.trim()).filter(Boolean),
                links: formData.link.trim() ? [formData.link.trim()] : undefined,
            };

            const materie = loadMaterieFromStorage();
            saveMaterieToStorage([nuovaMateria, ...materie]);
            await new Promise(resolve => setTimeout(resolve, 500));
            router.push('/');
        } catch (error) {
            console.error('Errore:', error);
            alert('Errore nel salvataggio');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold mb-6 transition-colors text-base"
            >
                ← Torna alla home
            </Link>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                    <h1 className="text-4xl font-bold mb-2">Nuova Materia</h1>
                    <p className="text-lg text-indigo-100">Compila il form per aggiungere una nuova materia</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <FormField
                        label="Titolo materia"
                        name="titolo"
                        value={formData.titolo}
                        onChange={handleChange}
                        error={errors.titolo}
                        placeholder="Es: Matematica"
                        required
                    />

                    <FormField
                        label="Professore"
                        name="prof"
                        value={formData.prof}
                        onChange={handleChange}
                        error={errors.prof}
                        placeholder="Es: Mario Rossi"
                        required
                    />

                    <FormField
                        label="Ore settimanali"
                        name="ore"
                        type="number"
                        value={formData.ore}
                        onChange={handleChange}
                        error={errors.ore}
                        placeholder="Es: 4"
                        required
                    />

                    <FormField
                        label="Libro di testo"
                        name="libro"
                        value={formData.libro}
                        onChange={handleChange}
                        error={errors.libro}
                        placeholder="Es: Matematica.blu Vol. 3"
                        required
                    />

                    <FormField
                        label="Argomenti"
                        name="argomenti"
                        value={formData.argomenti}
                        onChange={handleChange}
                        error={errors.argomenti}
                        placeholder="Es: Limiti, Derivate, Integrali"
                        helpText="Separa gli argomenti con una virgola"
                        isTextarea
                        required
                    />

                    <FormField
                        label="Link immagine libro (opzionale)"
                        name="link"
                        type="url"
                        value={formData.link}
                        onChange={handleChange}
                        placeholder="https://esempio.com/immagine.jpg"
                    />

                    <div className="flex gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base"
                        >
                            {isSubmitting ? 'Salvataggio...' : 'Salva materia'}
                        </button>
                        <Link
                            href="/"
                            className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-3.5 px-6 rounded-lg transition-colors text-center text-base"
                        >
                            Annulla
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

function FormField({
                       label,
                       name,
                       value,
                       onChange,
                       error,
                       placeholder,
                       helpText,
                       type = 'text',
                       isTextarea = false,
                       required = false
                   }: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    placeholder?: string;
    helpText?: string;
    type?: string;
    isTextarea?: boolean;
    required?: boolean;
}) {
    const inputClasses = `w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-base`;

    return (
        <div>
            <label className="block text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows={4}
                    className={inputClasses}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={inputClasses}
                    placeholder={placeholder}
                    min={type === 'number' ? '1' : undefined}
                />
            )}
            {helpText && (
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{helpText}</p>
            )}
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
            )}
        </div>
    );
}