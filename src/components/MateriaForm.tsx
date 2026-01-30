// src/components/MateriaForm.tsx
'use client';
import React, { useState } from 'react';
import { Materia } from '@/types';

type Props = {
    onSave: (m: Materia) => void;
    initial?: Partial<Materia>;
};

export default function MateriaForm({ onSave, initial }: Props) {
    const [titolo, setTitolo] = useState(initial?.titolo ?? '');
    const [ore, setOre] = useState(initial?.ore ?? 3);
    const [insegnante, setInsegnante] = useState(initial?.insegnante ?? '');
    const [argomenti, setArgomenti] = useState((initial?.argomenti ?? []).join(', '));
    const [libro, setLibro] = useState(initial?.libro ?? '');
    const [links, setLinks] = useState((initial?.links ?? []).join(', '));

    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!titolo.trim() || !insegnante.trim()) {
            alert('Titolo e insegnante obbligatori');
            return;
        }
        const m: Materia = {
            id: Date.now().toString(),
            titolo: titolo.trim(),
            ore: Number(ore),
            insegnante: insegnante.trim(),
            argomenti: argomenti
                .split(',')
                .map(s => s.trim())
                .filter(Boolean),
            libro: libro.trim() || undefined,
            links: links
                .split(',')
                .map(s => s.trim())
                .filter(Boolean),
        };
        onSave(m);
    }

    return (
        <form onSubmit={submit} className="bg-white p-5 rounded shadow space-y-3">
            <div>
                <label className="block text-sm font-medium">Titolo</label>
                <input value={titolo} onChange={e => setTitolo(e.target.value)} className="mt-1 block w-full border rounded p-2" />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium">Ore</label>
                    <input type="number" value={ore} onChange={e => setOre(Number(e.target.value))} className="mt-1 block w-full border rounded p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Insegnante</label>
                    <input value={insegnante} onChange={e => setInsegnante(e.target.value)} className="mt-1 block w-full border rounded p-2" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium">Argomenti (separati da ,)</label>
                <input value={argomenti} onChange={e => setArgomenti(e.target.value)} className="mt-1 block w-full border rounded p-2" />
            </div>

            <div>
                <label className="block text-sm font-medium">Libro di testo</label>
                <input value={libro} onChange={e => setLibro(e.target.value)} className="mt-1 block w-full border rounded p-2" />
            </div>

            <div>
                <label className="block text-sm font-medium">Link utili (separati da ,)</label>
                <input value={links} onChange={e => setLinks(e.target.value)} className="mt-1 block w-full border rounded p-2" />
            </div>

            <div className="flex gap-2">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Salva</button>
            </div>
        </form>
    );
}
