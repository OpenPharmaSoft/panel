# Utiliser une image de base Node.js
FROM node:14

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et installer les dépendances
COPY package.json .
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]