let express = require('express');
let router = express.Router();

router.get('/:idProductos',function(req,res){
    res.send('BIENVENIDO AL PRODUCTO' + req.params.idProductos)
  });
  
router.get('/:idProductos/comentarios',function(req,res){
    res.send('BIENVENIDO AL COMENTARIO DEL PRODUCTO' + req.params.idProductos)
  });
  
  module.exports = router;
  
  