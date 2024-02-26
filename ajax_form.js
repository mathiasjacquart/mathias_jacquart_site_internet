document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) { 
        form.classList.add('formHidden')
        event.preventDefault(); // Empêcher le rechargement de la page

        // Récupérer les données du formulaire
        const formData = new FormData(form);

        // Créer un objet XMLHttpRequest
        const ajaxObj = new XMLHttpRequest();

        // Configurer la requête
        ajaxObj.open('POST', 'send_form.php', true);

        // Gérer la réponse
        ajaxObj.onload = function() {
            if (ajaxObj.status >= 200 && ajaxObj.status < 400) {
                // Succès de la requête
                const response = ajaxObj.responseText;
                let stringHTML = 
                `<div>
                <p>Bonjour ${response}, votre message a été envoyé avec succès.</p>
                <p>Nous vous remercions pour l'intérêt que vous nous portez.</p>
                </div> `
                let blocResponse = document.querySelector('.response')
                blocResponse.classList.add ('show')
                blocResponse.innerHTML = stringHTML
                
                // document.getElementById('response').innerHTML = response;
            } else {
                // Erreur lors de la requête
                console.error("Erreur lors de la requête AJAX.");
            }
        };

        // Gérer les erreurs réseau
        ajaxObj.onerror = function() {
            console.error("Erreur réseau lors de la requête AJAX.");
        };

        // Envoyer la requête avec les données du formulaire
        ajaxObj.send(formData);
    });
});

