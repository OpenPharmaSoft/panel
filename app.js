document.addEventListener('DOMContentLoaded', () => {
    fetch('user_data.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            console.log('User data loaded:', data); // Log the loaded data
            const userData = parseUserData(data);
            initializeApp(userData);
        })
        .catch(error => console.error('Error loading user data:', error));
});

function parseUserData(data) {
    const lines = data.split('\n');
    const userData = {};
    lines.forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            userData[key.trim()] = value.trim();
        }
    });
    return userData;
}

function initializeApp(userData) {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const userDisplayName = document.getElementById('userDisplayName');
    const logoutButton = document.getElementById('logoutButton');

    if (!loginForm || !errorMessage || !userDisplayName || !logoutButton) {
        console.error('Required elements are missing in the DOM');
        return;
    }

    // Mettre à jour le nom de la pharmacie dans la barre de navigation
    const pharmacyNameElement = document.getElementById('pharmacyName');
    if (pharmacyNameElement) {
        pharmacyNameElement.textContent = userData.pharmacy_name;
    }

    // Vérifier l'état de connexion au chargement de la page
    const userType = localStorage.getItem('userType');
    const loginTime = localStorage.getItem('loginTime');
    const currentTime = new Date().getTime();
    const username = localStorage.getItem('username');

    // Vérifier si le token est encore valide (5 minutes = 300000 ms)
    if (userType && loginTime && (currentTime - loginTime < 300000)) {
        showUserSection(userType);
        document.getElementById('login').classList.add('d-none');
        userDisplayName.textContent = username;
        logoutButton.style.display = 'block';
    } else {
        // Si le token a expiré, supprimer les informations de connexion
        localStorage.removeItem('userType');
        localStorage.removeItem('loginTime');
        localStorage.removeItem('username');
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simuler une vérification des identifiants
        if (username === userData.admin_username && password === userData.admin_password) {
            localStorage.setItem('userType', 'admin');
            localStorage.setItem('loginTime', new Date().getTime());
            localStorage.setItem('username', username);
            redirectToHome();
        } else if (username === userData.pharmacien_username && password === userData.pharmacien_password) {
            localStorage.setItem('userType', 'pharmacien');
            localStorage.setItem('loginTime', new Date().getTime());
            localStorage.setItem('username', username);
            redirectToHome();
        } else if (username === userData.preparateur_username && password === userData.preparateur_password) {
            localStorage.setItem('userType', 'preparateur');
            localStorage.setItem('loginTime', new Date().getTime());
            localStorage.setItem('username', username);
            redirectToHome();
        } else {
            errorMessage.textContent = 'Identifiant ou mot de passe incorrect';
            errorMessage.style.display = 'block';
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userType');
        localStorage.removeItem('loginTime');
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });

    function showUserSection(userType) {
        document.getElementById(userType).classList.remove('d-none');
    }

    function redirectToHome() {
        window.location.assign('home.html');
    }
}