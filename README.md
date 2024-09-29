# panel
The official web-interface for OpenPharmaSoftware

Étape 1 : Installer Node.js et Express
Installez Node.js et npm (Node Package Manager) si ce n'est pas déjà fait :

sudo apt update
sudo apt install nodejs npm

Initialisez un nouveau projet Node.js et installez Express :

mkdir myapp
cd myapp
npm init -y
npm install express
npm install mongoose

Install Docker
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce


sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install libssl1.1
sudo apt-get install -y mongodb-org
sudo docker run -d -p 27017:27017 --name mongodb mongo:latest