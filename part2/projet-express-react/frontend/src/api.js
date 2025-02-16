import axios from "axios";

const API_URL = "http://localhost:5000/users";

// Récupérer tous les utilisateurs
export const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Ajouter un utilisateur
export const addUser = async (name) => {
    const response = await axios.post(API_URL, { name });
    return response.data;
};
