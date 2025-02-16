let users = [
    { id: 1, name: "Marie" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Brebis" },
];

// Récupérer tous les utilisateurs
exports.getUsers = (req, res) => {
    res.json(users);
};

// Ajouter un nouvel utilisateur
exports.addUser = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Le nom est requis" });
    }
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};
