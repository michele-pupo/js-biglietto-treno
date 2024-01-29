// Chiedi la temperatura all'utente in gradi Celsius
// converti la temperatura in gradi Fahrenheit

const celsius = prompt("Qual è la tua temperatura?");

document.getElementById("temperature-celsius").innerHTML = celsius;

// calcolo temperatura in Fahrenheit
const fahrenheit = (((celsius * 9) / 5) + 32);

if (celsius >= 36.5){
    // l'utente ha la febbre
    console.log("ha la febbre");
    
    document.getElementById("temperature-celsius").innerHTML = `si, mi sa che ti sei beccato una bella influenza!`;
    document.getElementById("temperature-fahrenheit").innerHTML = `${(fahrenheit)}°F`;

} else {
    // l'utente non ha la febbre
    console.log("non ha la febbre");

    document.getElementById("temperature-celsius").innerHTML = `non hai la febbre, stai benissimo!!`;
    document.getElementById("temperature-fahrenheit").innerHTML = `${(fahrenheit)}°F`;
}   