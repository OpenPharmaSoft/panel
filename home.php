<?php
include 'php/session.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion de Pharmacie</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" id="pharmacyName">Pharmacie</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#ordonnances">Ordonnances</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#historique-patient">Historique Patient</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#rappels-alertes">Rappels et Alertes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#commandes-medicaments">Commandes de Médicaments</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#communication">Communication</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <?php echo htmlspecialchars($_SESSION['username']); ?>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="php/logout.php" id="logoutButton">Déconnexion</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <header class="bg-primary text-white text-center py-5">
        <h1>Gestion de Pharmacie</h1>
    </header>
    <main class="container my-5">
        <section id="ordonnances" class="mb-5">
            <h2 class="text-primary">Gestion des Ordonnances</h2>
            <!-- Contenu pour la gestion des ordonnances -->
        </section>
        <section id="historique-patient" class="mb-5">
            <h2 class="text-primary">Historique Patient</h2>
            <!-- Contenu pour l'historique des patients -->
        </section>
        <section id="rappels-alertes" class="mb-5">
            <h2 class="text-primary">Rappels et Alertes</h2>
            <!-- Contenu pour les rappels et alertes -->
        </section>
        <section id="commandes-medicaments" class="mb-5">
            <h2 class="text-primary">Commandes de Médicaments</h2>
            <!-- Contenu pour les commandes de médicaments -->
        </section>
        <section id="communication" class="mb-5">
            <h2 class="text-primary">Communication</h2>
            <!-- Contenu pour la communication -->
        </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>