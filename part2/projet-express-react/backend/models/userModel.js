const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
    return await prisma.user.findMany();
};

const addUser = async (name) => {
    return await prisma.user.create({ data: { name } });
};

module.exports = { getAllUsers, addUser };
