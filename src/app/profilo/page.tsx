// src/app/profilo/page.tsx
import React from 'react';

export default function ProfiloPage() {
    return (
        <div className="bg-white p-6 rounded shadow max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Profilo Studente</h2>
            <div className="space-y-3">
                <div>
                    <strong className="text-gray-700">Nome:</strong>
                    <span className="ml-2">Diego</span>
                </div>
                <div>
                    <strong className="text-gray-700">Email:</strong>
                    <span className="ml-2">diego@example.com</span>
                </div>
                <div>
                    <strong className="text-gray-700">Anno:</strong>
                    <span className="ml-2">3° anno</span>
                </div>

                <div className="mt-6 pt-6 border-t">
                    <h3 className="font-medium text-lg mb-2">Note</h3>
                    <p className="text-sm text-gray-600">
                        Qui puoi inserire informazioni aggiuntive sullo studente.
                    </p>
                </div>
            </div>
        </div>
    );
}