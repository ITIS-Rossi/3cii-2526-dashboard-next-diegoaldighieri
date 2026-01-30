import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { materie } from './models/materia';

export default function Home() {
  const totaleOre = materie.reduce((sum, materia) => sum + materia.ore, 0);
  const mediaOre = materie.length > 0 ? (totaleOre / materie.length).toFixed(1) : 0;

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Le mie Materie</h1>
            <p className="text-gray-600">Dashboard personale - Anno Scolastico 2025/2026</p>
          </div>

          {/* Statistiche */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Totale Materie</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <p className="text-4xl font-bold">{materie.length}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Ore Settimanali</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-4xl font-bold">{totaleOre}</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Media Ore</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <p className="text-4xl font-bold">{mediaOre}</p>
            </div>
          </div>

          {/* Pulsante Nuova Materia */}
          <div className="mb-6">
            <Link
                href="/materie/nuova"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Nuova Materia
            </Link>
          </div>

          {/* Elenco Materie */}
          {materie.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nessuna materia trovata</h3>
                <p className="text-gray-600 mb-6">Inizia aggiungendo la tua prima materia!</p>
                <Link
                    href="/materie/nuova"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Aggiungi la prima materia
                </Link>
              </div>
          ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materie.map((materia) => (
                    <Link
                        key={materia.id}
                        href={`/materie/${materia.id}`}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                    >
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
                        <h3 className="text-xl font-bold text-white mb-1">{materia.titolo}</h3>
                        <p className="text-indigo-100 text-sm">Prof. {materia.prof}</p>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 font-semibold">{materia.ore} ore/settimana</span>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-2">Libro:</p>
                          <p className="text-gray-800 font-medium line-clamp-2">{materia.libro}</p>
                        </div>

                        {materia.link && (
                            <div className="mb-4">
                              <Image
                                  src={materia.link}
                                  alt={materia.libro}
                                  width={150}
                                  height={200}
                                  className="w-32 h-auto mx-auto object-contain"
                                  onError={(e) => {
                                    // Fallback se l'immagine non si carica
                                    e.currentTarget.style.display = 'none';
                                  }}
                              />
                            </div>
                        )}

                        <div>
                          <p className="text-sm text-gray-600 mb-2">Argomenti principali:</p>
                          <div className="flex flex-wrap gap-2">
                            {materia.argomenti.slice(0, 3).map((argomento, index) => (
                                <span
                                    key={index}
                                    className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
                                >
                          {argomento}
                        </span>
                            ))}
                            {materia.argomenti.length > 3 && (
                                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{materia.argomenti.length - 3}
                        </span>
                            )}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-indigo-600 font-semibold group-hover:text-indigo-800 flex items-center gap-1">
                      Visualizza dettagli
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
          )}
        </div>
      </div>
  );
}