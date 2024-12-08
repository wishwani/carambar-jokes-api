# Backend Server - Carambar Jokes API

Ce projet est l'API backend pour la gestion des blagues Carambar. Il permet de gérer les blagues, de les stocker dans une base de données SQLite et d'exposer des points de terminaison pour récupérer ces blagues.

## Prérequis

Avant de démarrer, assurez-vous que vous avez les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (v16 ou supérieur)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/)
- [Render](https://render.com/)

## Installation

1. Clonez le dépôt :
    [github](https://github.com/wishwani/carambar-jokes-api.git) 
2. Accédez au dossier du backend :
    ```
    cd carambar-jokes-api
    ```
3. Installez les dépendances :
    ```
    npm install
    ```
4. Configurer la Base de Données :

    SQLite créera automatiquement la base de données lors du premier lancement.
5. Démarrer le Serveur :
    ```
    npm start
    ```
    L'API sera disponible à l'adresse 
    ```
    http://localhost:3000.
    ```
## Routes disponibles

POST/jokes
Ajoute une nouvelle blague à la base de données.

GET/jokes
Récupère une liste de toutes les blagues présentes dans la base de données.

GET/jokes/:id
Récupère une blague spécifique en fonction de son identifiant (ID).

GET/Random
Récupère une blague aléatoire dans la base de données.



## Déploiement
Backend via Render.com :

  Créez un nouveau service web sur Render.com.

  Connectez le service au dépôt GitHub du backend.

  Configurez les variables d’environnement et les commandes de construction si nécessaire.

  Une fois le déploiement terminé, vous obtiendrez une URL publique pour votre API.

## Technologies Utilisées
  Express.js - Framework Node.js pour gérer les requêtes HTTP.

  Sequelize - ORM pour interagir avec la base de données SQLite.

  Swagger - Pour la documentation de l'API.

  SQLite3 - Base de données utilisée pour stocker les blagues.

## API Documentation
The API is documented using Swagger. You can access the API documentation via the following link:

[Swagger API Documentation](https://carambar-jokes-api-cf5j.onrender.com/api-docs/)

## GitHub Repositories

[Backend Repository](https://github.com/wishwani/carambar-jokes-api)

[Frontend Repository](https://github.com/wishwani/carambar-jokes-frontend)
