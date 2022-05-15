const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.get('/', (_, res) => {
    return res.json({
        nombre: "Jordy Sarmiento",
        correo: "jordysarmiento@gmail.com"
    })
})

app.listen(5000, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})