// app.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simuler une vérification des identifiants
        if (username === 'admin' && password === 'adminpass') {
            document.getElementById('admin').classList.remove('d-none');
        } else if (username === 'pharmacien' && password === 'pharmacienpass') {
            document.getElementById('pharmacien').classList.remove('d-none');
        } else if (username === 'preparateur' && password === 'preparateurpass') {
            document.getElementById('preparateur').classList.remove('d-none');
        } else {
            alert('Identifiant ou mot de passe incorrect');
        }

        // Masquer le formulaire de connexion après la connexion
        document.getElementById('login').classList.add('d-none');
    });
});