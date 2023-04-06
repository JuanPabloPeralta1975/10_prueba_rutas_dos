let express = require('express');
let router = express.Router();

router.get('/',function(req,res){
    res.send('BIENVENIDOS AL SITIO')
  });
  
router.get('/contacto',function(req,res){
    res.send('DEJANOS TU CONTACTO')
  });

module.exports = router;
  
  