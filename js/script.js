// Chiedi all’utente il suo nome,
let nomeUtente = prompt('Ciao! Qual è il tuo nome?');
console.log(nomeUtente);

// chiedi il suo cognome,
let cognomeUtente = prompt('Adesso scrivi il tuo cognome');
console.log(cognomeUtente);

// chiedi il suo colore preferito
let colorePref = prompt('Abbiamo quasi finito! Qual è il tuo colore preferito?');
console.log (colorePref);

// chiedi il suo numero preferito
let numeroPref = parseInt(prompt('Ultima domanda. Qual è il tuo numero preferito?'));
console.log (numeroPref);

let numero = 5 + numeroPref;

 

// Infine scrivi sulla pagina nomecognomecolorepreferito(numpref+5)


let password = `la tua password è ${nomeUtente}${cognomeUtente}${colorePref}${numero}`;
document.getElementById('mio_id').innerHTML = password;
