const express = require('express');
const conectarDB = require('./config/db'); // Importas tu configuración de MongoDB
require('dotenv').config(); // Para leer las variables del .env

const app = express();

// 1. Conectar a la Base de Datos
conectarDB();

app.use(express.json());

// 2. Ejemplo de ruta usando Express
app.get('/productos', (req, res) => {
    res.json({ mensaje: "Aquí se mostrarán los productos de la DB" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});