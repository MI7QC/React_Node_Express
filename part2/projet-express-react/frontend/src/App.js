import { useEffect, useState } from "react";
import { fetchUsers, addUser } from "./api";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");

    // Charger les utilisateurs au démarrage
    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    // Ajouter un utilisateur
    const handleAddUser = async (e) => {
        e.preventDefault();
        if (!name.trim()) return; // Empêcher l'ajout d'un nom vide
        const newUser = await addUser(name);
        setUsers([...users, newUser]);
        setName(""); // Réinitialiser le champ
    };

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <h2>Ajouter un utilisateur</h2>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom"
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default App;
