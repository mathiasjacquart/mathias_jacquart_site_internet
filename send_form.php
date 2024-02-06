<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $destinataire = 'math.jacquart@gmail.com'; // Adresse email où vous souhaitez recevoir les informations
    $sujet = 'Nouveau message depuis votre formulaire de contact';

    $contenu = "Prénom : $prenom\n";
    $contenu .= "Nom : $nom\n";
    $contenu .= "Email : $email\n";
    $contenu .= "Message :\n$message";

    // Envoi de l'email
    mail($destinataire, $sujet, $contenu);

    // Redirection vers une page de confirmation
    header('Location: confirmation.html');
    exit;
}
?>