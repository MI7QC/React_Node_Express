# 📌 Projet Express & React - API Utilisateurs

## 📝 Description
Ce projet est une application full-stack avec un backend en **Node.js (Express)** et un frontend en **React**. L'application permet de gérer une liste d'utilisateurs via une API REST.

---
## 📂 Structure du projet

```
/backend
 ├── /routes
 │   ├── users.js        # Routes liées aux utilisateurs
 ├── /controllers
 │   ├── usersController.js # Logique métier des utilisateurs
 ├── /models
 │   ├── usersModel.js   # (Modèle utilisateur pour la gestion des données)
 ├── server.js           # Point d'entrée du backend
/frontend
 ├── /src
 │   ├── App.js          # Composant principal React
 │   ├── api.js          # Fonctions API avec Axios
 ├── package.json        # Dépendances frontend
```

---
## 📦 Dépendances installées et leur utilité

### 🔹 Backend (Express)
| Dépendance | Utilité |
|------------|---------|
| express | Framework minimaliste pour le serveur Node.js |
| cors | Gère les permissions Cross-Origin entre backend et frontend |
| dotenv | Charge les variables d'environnement depuis un fichier `.env` |
| nodemon | Permet de redémarrer automatiquement le serveur après modification du code |
| axios | Effectue des requêtes HTTP depuis le backend si nécessaire |
| body-parser | Analyse les corps des requêtes en JSON |
| morgan | Logger HTTP pour voir les requêtes dans la console |

### 🔹 Frontend (React)
| Dépendance | Utilité |
|------------|---------|
| react | Bibliothèque pour construire l'interface utilisateur |
| axios | Effectue les requêtes HTTP au backend |

---
## ⚙️ Installation et exécution

### 1️⃣ Installer les dépendances
Dans le backend :
```sh
cd backend
npm install express cors dotenv nodemon axios body-parser morgan
```
Dans le frontend :
```sh
cd frontend
npm install react axios
```

### 2️⃣ Lancer le backend
```sh
cd backend
npm run dev  # Utilise nodemon pour un serveur en live reload
```

### 3️⃣ Lancer le frontend
```sh
cd frontend
npm start
```

---
## 🛠 Détail des fichiers

### 🔹 Backend
#### `/server.js`
- Point d'entrée du serveur.
- Configure Express, CORS et les routes utilisateurs.
- Utilise Morgan pour le logging.

#### `/routes/users.js`
- Définit les routes API : `GET /users` et `POST /users`.
- Connecte les routes au contrôleur des utilisateurs.

#### `/controllers/usersController.js`
- Contient la logique métier pour récupérer et ajouter des utilisateurs.

#### `/models/usersModel.js`
- Contient la structure des utilisateurs sous forme d'un tableau (dans le cas sans base de données).
- Sert de modèle pour gérer les utilisateurs.

### 🔹 Frontend
#### `/src/App.js`
- Composant principal qui affiche la liste des utilisateurs et permet d’en ajouter un.
- Gère l'état des utilisateurs avec `useState`.
- Fait des appels API via `api.js`.

#### `/src/api.js`
- Contient les fonctions API utilisant **Axios** (`getUsers`, `addUser`).
- Sépare la logique des appels API du composant principal.

---
## 📌 Exemples d'utilisation de l'API

### 🔹 Récupérer les utilisateurs
**Requête:**
```sh
GET http://localhost:5000/users
```
**Réponse:**
```json
[
  { "id": 1, "name": "Marie" },
  { "id": 2, "name": "Sam" }
]
```

### 🔹 Ajouter un utilisateur
**Requête:**
```sh
POST http://localhost:5000/users
Content-Type: application/json

{
  "name": "Brebis"
}
```
**Réponse:**
```json
{ "id": 3, "name": "Brebis" }
```

---
## ✅ Notes supplémentaires
- Assure-toi que le **backend tourne sur le port 5000** et que le **frontend est sur 3000**.
- Tu peux utiliser Postman pour tester l’API.
- Pense à ajouter un fichier `.env` pour stocker des variables sensibles.
- `usersModel.js` peut être remplacé par une base de données si nécessaire.

🔥 **Projet prêt à l'emploi !** 🚀

