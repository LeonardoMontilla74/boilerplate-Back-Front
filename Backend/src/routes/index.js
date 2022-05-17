const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const route = Router();

route.get('/', (req, res) => {
    res.send('Hola mundo desde el backend...');
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = route;
