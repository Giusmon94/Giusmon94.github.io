// function effettuaLogin() {
//     // Recupera i valori di username e password
//     const username = document.getElementById("UserUsername").value;
//     const password = document.getElementById("UserPassword").value;

//     // Effettua la verifica dei dati (puoi sostituire questo con una chiamata a un server)
//     if (username === "admin" && password === "admin") {
//         alert("Login riuscito!");
//         // Puoi reindirizzare l'utente a un'altra pagina dopo il login
//         window.location.href = "main.html";
//     } else {
//         alert("Credenziali non valide. Riprova.");
//     }
// }


// Assicurati che il codice venga eseguito dopo il caricamento del documento
document.addEventListener("DOMContentLoaded", function () {
    // Ottieni il riferimento al form
    const loginForm = document.getElementById("UserLoginForm");
  
    // Aggiungi un ascoltatore per l'evento di invio del form
    loginForm.addEventListener("submit", function (event) {
      // Blocca il comportamento predefinito di invio del form
      event.preventDefault();
  
      // Recupera i valori di username e password
      const username = document.getElementById("UserUsername").value;
      const password = document.getElementById("UserPassword").value;
  
      // Esegui la verifica delle credenziali (puoi sostituire questo con una chiamata al tuo server)
      if (username === "admin" && password === "admin") {
        alert("Login riuscito!");
        // Puoi reindirizzare l'utente a un'altra pagina dopo il login
        window.location.href = "main.html";
      } else {
        alert("Credenziali non valide. Riprova.");
      }
    });
  });
  