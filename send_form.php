<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From:contact@mathias.jacquart.com\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion(); // En-tête personnalisé pour indiquer la version de PHP utilisée pour l'envoi


    $destinataire = 'math.jacquart@gmail.com'; 
    $sujet = 'Nouveau message depuis votre formulaire de contact';

    $contenu = "Prénom : $prenom\n";
    $contenu .= "Nom : $nom\n";
    $contenu .= "Email : $email\n";
    $contenu .= "Message :\n$message";

    
    mail($destinataire, $sujet, $contenu, $headers);
    echo $prenom;
    exit;
}

?>