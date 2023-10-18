//Iniciamos proyecto de nodejs con Express
//npm significa Node Package Manager (son paquetes de node, nos permite trabajar con node)
//Abrimos la terminal y escribimos el comando 'npm init -y'
//Para que se inicialice seria npm init el -y nos permite aceptar todo los que nos pide el proyecto
//sino te pregunta que nombre, version, descripcion, etc
//Luego usamos el comando en la terminal 'npm i express'
//Nos permite instalar express
//Cuando nos pasen un proyecto, va a ser sin los archivos de node, la forma de recuperar las dependencias 'express'
//hay que pararce en la carpeta del package.json y en el cmd escribir 'npm i'

//con esto ponemos en marcha el servidor web
//para bajar el servidor hay que usar 'ctrl + c'
//para levantar el servidor hay que usar el comando en cmd 'node index.js' o el archivo que tenga el servidor 
//luego usamos en el navegador 'http://localhost:8000' el numero depende de nosotros 
//esto nos devuelve una funcion 
//llamamos a la funcion y trabajamos todo con app (api, levantar servidores, etc)
//ponemos el servidor a escuchar y usamos un puerto vacio 
//creamos un endpoint

const express = require('express'); 

const app = express();


app.get('/clientes', (req, res) => {
    const clientes = [
        {id:1 , name:'Elon' , apellido: 'Musk'},
        {id:2 , name:'Bill' , apellido: 'Gates'},
        
    ];
    res.json(clientes);
}); 

console.log(req.query.id);

app.get('/provedores', (req, res) => {
    res.json([{}]);
}); 

app.post('/clientes', (res,req) => {
    res.json({message: 'El Cliente Fue Agregado Correctamente'});
});

app.listen(9000);

/* Create--->POST   
   Read----->GET
   Update--->PUT
   Delete--->DELTE
    */



