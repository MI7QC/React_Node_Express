const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"] }));
app.use(express.json());

// Importation des routes
const userRoutes = require("./routes/users");
app.use("/users", userRoutes); // Toutes les routes users passent par users.js

// Démarrer le serveur
app.listen(PORT, () => console.log(`✅ Serveur démarré sur http://localhost:${PORT}`));
