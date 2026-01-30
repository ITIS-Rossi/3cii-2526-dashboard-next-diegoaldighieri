// src/app/profilo/page.tsx
import React from 'react';

export default function ProfiloPage() {
    // Puoi personalizzare queste info o renderle modificabili in futuro
    return (
        <div className="bg-white p-6 rounded shadow max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">Profilo Studente</h2>
            <p><strong>Nome:</strong> Diego (modificabile)</p>
            <p><strong>Email:</strong> diego@example.com</p>
            <p><strong>Anno:</strong> 3° anno</p>

            <div className="mt-4">
                <h3 className="font-medium">Note</h3>
                <p className="text-sm text-gray-600">Qui puoi inserire informazioni sullo studente.</p>
            </div>
        </div>
    );
}
