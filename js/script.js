// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

let risultato;

// chiedi all'user quanti anni ha
const userAge = parseInt(prompt("Quanti anni hai?"));
// console.log ("User ha anni", userAge );


// chiedi all'utente quanti km deve percorrere
const viaggioKm =parseInt(prompt("Quanti km devi percorrere?"));
// console.log( "User deve percorrere km", viaggioKm);


// calcola il prezzo del viaggio
const prezzoBase = (viaggioKm * 0,21)
// console.log("Il prezzo del tuo biglietto base è € ",prezzoBase);


if(userAge < 18) {
    const scontoMinorenni = ((prezzoBase / 100) * 20);
    risultato = (prezzoBase - scontoMinorenni);


    //  console.log(risultato);
} else if (userAge > 65){
    const scontoOver = ((prezzoBase / 100) * 40);
    risultato = (prezzoBase - scontoOver);


    //  console.log(risultato);
} else {
    risultato = prezzoBase;


    // console.log(prezzoBase);
}

document.getElementById("biglietto").innerHTML = "Il prezzo del tuo biglietto è di €" + risultato;

