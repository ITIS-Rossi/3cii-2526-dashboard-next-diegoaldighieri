// src/types/index.ts
export type Materia = {
    id: number;
    titolo: string;
    ore: number;
    prof: string;
    argomenti: string[]; // elenco argomenti
    libro: string;
    link: string[];
};
