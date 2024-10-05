# Cloner le dépôt
git clone <URL_DU_DEPOT>
cd panel

# Configurer les variables d'environnement
echo "DB_USER=pharmacy_user
DB_HOST=database
DB_NAME=pharmacy_db
DB_PASSWORD=password
DB_PORT=5432
JWT_SECRET=your_jwt_secret" > backend/.env

# Installer les dépendances
cd backend
npm install
cd ../frontend
npm install

# Lancer Docker Compose
cd ..
docker-compose up --build

# Accéder à l'application
# Backend: http://localhost:3000
# Frontend: http://localhost:3001

# Vérifier les logs
docker-compose logs -f

# Arrêter les services
docker-compose down