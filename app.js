const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (_, res) => {
    return res.json({
        nombre: "Jordy Sarmiento",
        correo: "jordysarmiento@gmail.com"
    })
})

app.get('/contacto', (_, res) => {
    return res.send(
        "<h1>Hola mundo</h1>"
    )
})

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})