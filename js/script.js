// Chiedi all’utente il suo nome,
let nomeUtente = prompt('Ciao! Qual è il tuo nome?');
console.log(nomeUtente);

// chiedi il suo cognome,
let cognomeUtente = prompt('Adesso scrivi il tuo cognome');
console.log(cognomeUtente);

// chiedi il suo colore preferito
let colorePref = prompt('Abbiamo quasi finito! Qual è il tuo colore preferito?');
console.log (colorePref);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
const numero = 21;

let password = `la tua password è ${nomeUtente}${cognomeUtente}${colorePref}${numero}`;
document.getElementById('mio_id').innerHTML = password;
