// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
//  per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Bonus:
// effettuare dei controlli per capire se l'utente ha inserito correttamente 
// il numero di km e l'età (ovvero se sono effettivamente dei numeri e non testo a caso)


// chiediamo all'utente come si chiama
const firstname = prompt("Come ti chiami?")

// chiediamo all'utente quanti anni ha
const age = prompt("Quanti anni hai?")

//  chiediamo all'utente quanti chilometri deve fare
const kilometres = prompt("Quanti chilometri devi fare?")


// utente minorenne
if (age < 18){
    // sconto del 20%
    console.log("-20%");
    // utente con età compresa tra 18 e 65 niente sconto
} else if (age >= 18 && age <= 65){
    console.log("prezzo intero");
    // utente over 65
}else (age > 65){
    // sconto del 40%
    console.log("-40%");
}