document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    if (error) {
        document.getElementById('errorMessage').textContent = 'Identifiant ou mot de passe incorrect';
    }
});