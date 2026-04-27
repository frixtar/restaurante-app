const express = require('express');
const app = express();

app.use(express.json());

let pedidos = [];

app.get('/productos', (req, res) => {
    res.json([
        { id: 1, nombre: "Pizza", precio: 120 },
        { id: 2, nombre: "Hamburguesa", precio: 90 },
        { id: 3, nombre: "Tacos", precio: 70 }
    ]);
});

app.post('/pedido', (req, res) => {
    const nuevoPedido = {
        id: pedidos.length + 1,
        cliente: req.body.cliente,
        productos: req.body.productos,
        total: req.body.total,
        fecha: new Date()
    };
    
    pedidos.push(nuevoPedido);
    
    res.status(201).json({
        mensaje: "Pedido guardado con éxito",
        pedido: nuevoPedido
    });
});

app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor backend corriendo en: http://localhost:${PORT}`);
});