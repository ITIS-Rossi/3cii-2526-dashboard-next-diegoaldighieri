// src/types/index.ts
export type Materia = {
    id: string;
    titolo: string;
    ore: number;
    insegnante: string;
    argomenti: string[]; // elenco argomenti
    libro?: string;
    links?: string[];
};
