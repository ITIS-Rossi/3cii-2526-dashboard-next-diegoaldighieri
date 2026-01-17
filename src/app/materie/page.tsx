import React from 'react';

export type Materia = {
    id: number;
    titolo: string;
    prof: string;
    ore: number;
    libro: string;
    argomenti: string[];
    link: string;
};


export const materie:Materia[] = [
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

const MateriePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Le Mie Materie
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materie.map((materia) => (
                        <div
                            key={materia.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                <img
                                    src={materia.link}
                                    alt={materia.libro}
                                    className="w-full h-full object-contain p-4"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="250" viewBox="0 0 200 250"%3E%3Crect width="200" height="250" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%236b7280"%3ELibro%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {materia.titolo}
                                </h2>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start">
                                        <span className="text-gray-600 font-semibold min-w-[80px]">
                                            Professore:
                                        </span>
                                        <span className="text-gray-700">
                                            {materia.prof}
                                        </span>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-gray-600 font-semibold min-w-[80px]">
                                            Ore:
                                        </span>
                                        <span className="text-gray-700">
                                            {materia.ore} ore/settimana
                                        </span>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-gray-600 font-semibold min-w-[80px]">
                                            Libro:
                                        </span>
                                        <span className="text-gray-700">
                                            {materia.libro}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-gray-600 font-semibold mb-2">
                                        Argomenti:
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {materia.argomenti.map((argomento, index) => (
                                            <span
                                                key={index}
                                                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {argomento}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MateriePage;