let parola = prompt("Scegli pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero:"));
let somma = 0;


if (numeroUtente > 5 || numeroUtente < 0) {
    console.log("Inserisci un numero compreso tra 0 e 5");
} else {
    console.log("Il numero scelto dall'utente è:" + numeroUtente);
    
    
    let numeroComputer = getRandomNumber(0, 5);
    console.log("Il numero estratto dal computer è:" + numeroComputer);

    somma = numeroUtente + numeroComputer;
    console.log("La sommma dei due numeri è:" + somma);


    if (vittoria(somma) == parola) {
        console.log("Il vincitore è l'utente!!!");
    } else {
        console.log("Il vincitore è il computer!!!");
    }

}

function getRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

function vittoria(sum) {
    if (sum % 2 == 0) {
        return "pari";
    }
    return "dispari";
}


