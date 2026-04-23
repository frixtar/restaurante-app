// backend/index.js
require('dotenv').config(); // Carga las variables del .env
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
