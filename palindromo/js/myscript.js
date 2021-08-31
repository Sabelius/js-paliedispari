let parola = prompt("Inserisci una parola:");

function invertiParola(invertita) {
  if (invertita == invertita.split("").reverse().join("")) {
    return true;
  }
  return false;
}

if (invertiParola(parola)) {
  console.log("La parola è palindroma!!!");
} else {
  console.log("La parola non è palindroma!!!");
}