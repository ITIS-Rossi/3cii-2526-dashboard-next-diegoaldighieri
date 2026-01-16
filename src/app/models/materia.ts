export type Materia ={
    id: number;
    titolo:string;
    prof:string;
    ore:number;
    libro:string;
    argomenti:string[];
    link:string;
};

export const materie: Materia[] =[ {
    id:1,
    titolo:"Matematica",
    prof:"Gonzato Francesco",
    ore:6,
    libro:"Tutti i colori della matematica(edizione verde)",
    argomente:["Goniometria","Valori assoluti","Parabole","Disequazioni"],
    link:"https://www.cartolai.cloud/booknetstore/img.aspx?SIZE=&width=250&height=350&img=9788849426700&Settore=S",
},
    {
        id:2,
    }
]