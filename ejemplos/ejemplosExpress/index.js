'use strict';

// cargar la libreria de express

const express = require('express');

// crear la app

const app = express();

// este middleware se activa ante todas las peticiones porque no le he dado ningun filtro

app.use((req, res, next) => {
    console.log('He recibido una peticion de tipo', req.method, 'a', req.path);
    next();
}); // app.use() hace accion da igual la peticion que tenga post, get..

// añadir una ruta (ruta http)

app.get('/', (req, res, next) => {
    res.send('hola');
}); // raiz de nuestra app (request, responese, next)

app.get('/pedidos', (req, res, next) =>{
    if(true) {
        //aqui queremos devolver un error
        const error = new Error('La base de datos no funciona')
        next(error);
        return;
    }
    res.send('hola desde pedidos')
});

// middleware de errores

app.use((err, req, res, next) => {
    res.send('Ocurrio un error:' + err.message);
})

// arrancar la app (puerto, callback()opcional)

app.listen(8080, () => {
    console.log('Servidor HTTP arrancado en http://localhost:8080')
})