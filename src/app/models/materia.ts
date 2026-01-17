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
    }
]