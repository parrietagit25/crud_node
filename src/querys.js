const connection = require('./connection');

const getAllnotas = async () => {
    const [query] = await connection.execute('SELECT * FROM node_crud.notas');
    return query;
}

const getNoteById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM node_crud.notas WHERE id = ?`, [id]);
    return query;
}

const createNota = async (titulo, descripcion, stat) => {
    const [query] = await connection.execute(`INSERT INTO node_crud.notas(titulo, descripcion, stat)VALUES(?, ?, ?)`, [titulo, descripcion, stat]);
    return query;
}

module.exports = {getAllnotas, getNoteById, createNota}