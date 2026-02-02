import {toUpperCase} from "uri-js/dist/esnext/util";

const carrello = [
    { prodotto: "Mouse Wireless", prezzo: 25, categoria: "Elettronica" },
    { prodotto: "Tastiera Meccanica", prezzo: 80, categoria: "Elettronica" },
    { prodotto: "Zaino Porta PC", prezzo: 45, categoria: "Accessori" },
    { prodotto: "Tappetino Mouse", prezzo: 15, categoria: "Accessori" },
    { prodotto: "Monitor 24 Pollici", prezzo: 150, categoria: "Elettronica" }
];

// ------ Esercizio 1 ------

const catalogo = carrello.
    map(item => item.prodotto.toUpperCase());
console.log(catalogo);

// ------ Esercizio 2 ------

const catalogo2 = carrello.
    map(item => item.categoria == "Elettronica" && item.prezzo > 50 );
console.log(catalogo2);

// ------ Esercizio 3 ------

const totale = carrello.
    reduce((acc, item) => acc + item.prezzo, 0);
console.log(totale);

// ------ Esercizio 4 ------

const trovatore = carrello.
    find(item => item.prodotto == "Zaino Porta PC");
console.log(trovatore);

// ------ Esercizio 5 ------

const totalecategoria = carrello.
    find(item => item.categoria == "Accessori");

