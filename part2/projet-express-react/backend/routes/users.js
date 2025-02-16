const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../controllers/usersController");

// Routes API
router.get("/", getUsers);  // GET /users → Récupère tous les utilisateurs
router.post("/", addUser);  // POST /users → Ajoute un nouvel utilisateur

module.exports = router;
