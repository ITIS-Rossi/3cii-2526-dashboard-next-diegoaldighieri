// src/lib/materie.ts
import { Materia } from '@/types';

const STORAGE_KEY = 'materie_dashboard_v1';

const sample: Materia[] = [
    {
        id:1,
        titolo:"Matematica",
        prof:"Gonzato Francesco",
        ore:4,
        libro:"Tutti i colori della matematica(edizione verde)",
        argomenti:["Goniometria","Valori assoluti","Parabole","Disequazioni"],
        link:"https://www.cartolai.cloud/booknetstore/img.aspx?SIZE=&width=250&height=350&img=9788849426700&Settore=S",
    },
    {
        id:2,
        titolo:"Informatica",
        prof:"Lovison Fabrizio",
        ore:6,
        libro:"E-Program",
        argomenti:["Turing","Html,js e css","Ordinamenti","Next.js"],
        link:"https://www.mondadorieducation.it/media/img/120900073451HIG.jpg?x14791",
    },
    {
        id:3,
        titolo:"Sistemi e reti",
        prof:"Balestro Sergio",
        ore:4,
        libro:"Gateway",
        argomenti:["Sistemi","JFLAP","Componenti del pc","Assembly"],
        link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwnKWABlo2o4lBz8KTJFFcsNPKfZf6GQY1Q&s",
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
