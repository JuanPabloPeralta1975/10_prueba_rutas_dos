var express = require('express');
let rutaProductos = require('./routes/productos.js');
let rutaMain = require('./routes/main.js');

var app = express();

app.listen(3000, function() {
  console.log('corriendo en  el puerto 3000');
});

app.use('/productos',rutaProductos);
app.use('/',rutaMain);



