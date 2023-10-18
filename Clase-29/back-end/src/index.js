const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors()); //middleware

app.use(express.json()) //Habilita la lectura de los JSON que me envien

app.get('/clientes', (req,res) => {
    const clientes  = [{
        nombre: 'Elon',
        apellido: 'Musk'
    },
    {
        nombre: 'Bill',
        apellido: 'Gates'
    },
    {
        nombre: 'Richard',
        apellido: 'Stallman'
    }
    ];
    res.json(clientes);
});

app.post('/clientes', (req,res) => {

    console.log(req.body)
    res.status(201).json({message: 'El Cliente Fue Agregado Correctamente'});
});

app.delete('/clientes', (req, res) => {
    res.json({message: 'El Cliente Fue Elminado Correctamente'});
});

app.put('/clientes', (req, res) => {
    res.json({message: 'El Cliente Fue Modificado Correctamente'});
});

app.listen(9000);