// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Creo array con le email
const emailAutorizzate = ["pippoverdi@gmail.com", "pippoblu@gmail.com", "luigi@gmail.com", "patatino@gmail.com", "simone@gmail.com", "luca@gmail.com", "pluto@gmail.com"];

const form = document.getElementById('emailForm');
        const messaggio = document.getElementById('messaggio');

        // Aggiungi un evento submit al form
        form.addEventListener('submit',
            function (event) {
            // Impedisci il comportamento predefinito del form
            event.preventDefault();

            // Ottieni l'email inserita dall'utente
            let emailUtente = document.getElementById('email').value;

            // Variabile per tenere traccia se l'email è autorizzata
            let emailTrovata = false;

            // Controlla se l'email dell'utente è nella lista delle email autorizzate
            for (let i = 0; i < emailAutorizzate.length; i++) {
                if (emailUtente === emailAutorizzate[i]) {
                    emailTrovata = true;
                    break;
                }
            }

            // Stampa un messaggio appropriato sull'esito del controllo
            if (emailTrovata) {
                messaggio.textContent = "Accesso consentito. Benvenuto!";
            } else {
                messaggio.textContent = "Accesso negato. Email non autorizzata.";
            }
        });