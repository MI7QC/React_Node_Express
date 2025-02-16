const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;


 // Permet d'autoriser les requêtes depuis le frontend
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"] }));
app.use(express.json()); 

const users = [
    {id:1, name: "Marie"},
    {id:2, name: "Sam"},
    {id:3, name: "Brebis"},
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    console.log("Données reçues:", req.body); // Vérifie les données envoyées
    const newuser = { id: users.length + 1, name: req.body.name };
    users.push(newuser);
    res.json(newuser);
});


app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
