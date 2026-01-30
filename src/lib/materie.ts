// src/lib/materie.ts
import { Materia } from '@/types';

const STORAGE_KEY = 'materie_dashboard_v1';

const sample: Materia[] = [
    {
        id: '1',
        titolo: 'Matematica',
        ore: 4,
        insegnante: 'Prof. Rossi',
        argomenti: ['Algebra', 'Geometria'],
        libro: 'Matematica 2 - Editore X',
        links: ['https://esempio.com/matematica'],
    },
    {
        id: '2',
        titolo: 'Informatica',
        ore: 3,
        insegnante: 'Prof.ssa Bianchi',
        argomenti: ['JS', 'Algoritmi'],
        libro: 'Introduzione all’informatica',
        links: ['https://esempio.com/informatica'],
    },
];

export function loadMaterieFromStorage(): Materia[] {
    try {
        if (typeof window === 'undefined') return sample;
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sample));
            return sample;
        }
        return JSON.parse(raw) as Materia[];
    } catch (e) {
        console.error('loadMaterieFromStorage', e);
        return sample;
    }
}

export function saveMaterieToStorage(materie: Materia[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(materie));
    } catch (e) {
        console.error('saveMaterieToStorage', e);
    }
}
