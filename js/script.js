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

document.getElementById("first-name").innerHTML = firstname;

// chiediamo all'utente quanti anni ha
const age = prompt("Quanti anni hai?")

document.getElementById("years").innerHTML = age;

//  chiediamo all'utente quanti chilometri deve fare
const kilometres = prompt("Quanti chilometri devi fare?")

document.getElementById("km-travelled").innerHTML = kilometres;

// prezzo al chilometro
const priceForKm = 0.21;
// sconti per fascia di età
const percentageOfMinors = 20;
const percentageOver65 = 40;


// utente minorenne sconto 20%
if (age < 18){
    // sconto del 20%
    console.log("-20%");
    // calcolo prezzo del biglietto
    document.getElementById("ticket-price").innerHTML = (((priceForKm * kilometres) -(((priceForKm * kilometres) / 100) * percentageOfMinors)));

    // utente con età compresa tra 18 e 65 niente sconto
} else if (age >= 18 && age < 65){
    console.log("prezzo intero");
    // calcolo prezzo del biglietto
    document.getElementById("ticket-price").innerHTML = (priceForKm * kilometres);

    // utente over 65 sconto 40%
} else {
    // sconto del 40%
    console.log("-40%");
    // calcolo prezzo del biglietto
    document.getElementById("ticket-price").innerHTML = (((priceForKm * kilometres) -(((priceForKm * kilometres) / 100) * percentageOver65)));
}

