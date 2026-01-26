import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Materia = {
    id: number;
    titolo: string;
    prof: string;
    ore: number;
    libro: string;
    argomenti: string[];
    link: string;
};

const materie: Materia[] = [
    {
        id: 1,
        titolo: "Matematica",
        prof: "Gonzato Francesco",
        ore: 4,
        libro: "Tutti i colori della matematica(edizione verde)",
        argomenti: ["Goniometria", "Valori assoluti", "Parabole", "Disequazioni"],
        link: "https://www.cartolai.cloud/booknetstore/img.aspx?SIZE=&width=250&height=350&img=9788849426700&Settore=S",
    },
    {
        id: 2,
        titolo: "Informatica",
        prof: "Lovison Fabrizio",
        ore: 6,
        libro: "E-Program",
        argomenti: ["Turing", "Html,js e css", "Ordinamenti", "Next.js"],
        link: "https://www.mondadorieducation.it/media/img/120900073451HIG.jpg?x14791",
    },
    {
        id: 3,
        titolo: "Sistemi e reti",
        prof: "Balestro Sergio",
        ore: 4,
        libro: "Gateway",
        argomenti: ["Sistemi", "JFLAP", "Componenti del pc", "Assembly"],
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwnKWABlo2o4lBz8KTJFFcsNPKfZf6GQY1Q&s",
    }
];

export default function MateriaDettaglio({ params }: { params: { id: string } }) {
    const materia = materie.find(m => m.id === parseInt(params.id));

    if (!materia) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/materie"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-6 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Torna alle materie
                </Link>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Header con gradiente */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                        <h1 className="text-4xl font-bold mb-2">{materia.titolo}</h1>
                        <p className="text-indigo-100 text-lg">Prof. {materia.prof}</p>
                    </div>

                    <div className="p-8">
                        {/* Immagine del libro */}
                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            <div className="md:w-1/3">
                                <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                                    <img
                                        src={materia.link}
                                        alt={materia.libro}
                                        className="w-full h-auto object-contain"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="250" viewBox="0 0 200 250"%3E%3Crect width="200" height="250" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%236b7280"%3ELibro%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Informazioni principali */}
                            <div className="md:w-2/3 space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        Dettagli
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                            <p className="text-sm text-gray-600 mb-1">Professore</p>
                                            <p className="text-xl font-semibold text-gray-800">{materia.prof}</p>
                                        </div>

                                        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                                            <p className="text-sm text-gray-600 mb-1">Ore settimanali</p>
                                            <p className="text-xl font-semibold text-gray-800">{materia.ore} ore</p>
                                        </div>

                                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                                            <p className="text-sm text-gray-600 mb-1">Libro di testo</p>
                                            <p className="text-xl font-semibold text-gray-800">{materia.libro}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sezione Argomenti */}
                        <div className="border-t pt-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                </svg>
                                Argomenti trattati
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {materia.argomenti.map((argomento, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <p className="text-lg font-medium text-gray-800">{argomento}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Statistiche */}
                        <div className="border-t pt-8 mt-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                                Riepilogo
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
                                    <p className="text-sm opacity-90 mb-1">Ore settimanali</p>
                                    <p className="text-4xl font-bold">{materia.ore}</p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
                                    <p className="text-sm opacity-90 mb-1">Argomenti</p>
                                    <p className="text-4xl font-bold">{materia.argomenti.length}</p>
                                </div>

                                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
                                    <p className="text-sm opacity-90 mb-1">Ore totali anno</p>
                                    <p className="text-4xl font-bold">{materia.ore * 33}</p>
                                    <p className="text-xs opacity-75 mt-1">~33 settimane</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}