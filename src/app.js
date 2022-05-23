const express = require('express');
const connection = require('./config/database')
require('dotenv').config()
const userModel = require('./models/users')

const app = express();
const PORT = process.env.PORT || 5000;

connection();

app.get('/', async (_, res) => {
    const users = await userModel.find();
    return res.json({ users })
})

app.get('/contacto', (_, res) => {
    return res.send(
        "<h1>Hola mundo, nuevo</h1>"
    )
})

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})