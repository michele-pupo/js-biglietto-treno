// Chiedi a tre utenti di inserire 3 numeri in prompt
// rilascia la media con due numeri decimali

const utenteUno = Number(prompt("Qui, scegli un numero"));

document.getElementById("utente-1").innerHTML = utenteUno;

const utenteDue = Number(prompt("Quo, scegli un numero"));

document.getElementById("utente-2").innerHTML = utenteDue;

const utenteTre = Number(prompt("Qua, scegli un numero"));

document.getElementById("utente-3").innerHTML = utenteTre;

// calcolo media numeri
const media = (((utenteUno + utenteDue + utenteTre) / 3).toFixed(2));

document.getElementById("media").innerHTML = `Bravissimi Qui, Quo e Qua, la media dei vostri numeri é: ${(media)}`;