// backend/index.js
require('dotenv').config();
const express = require('express');
const conectarDB = require('./config/db.js');

const app = express();

// Conectar a la base de datos
conectarDB();

// Middleware para leer JSON
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API del Restaurante funcionando 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});